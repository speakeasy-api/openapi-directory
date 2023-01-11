import dataclasses
from typing import Optional
from enum import Enum
from ..shared import previewfileresponse as shared_previewfileresponse

class GetPreviewImageSizeEnum(str, Enum):
    SMALL = "small"
    MEDIUM = "medium"
    LARGE = "large"


@dataclasses.dataclass
class GetPreviewImageQueryParams:
    resource: str = dataclasses.field(metadata={'query_param': { 'field_name': 'resource', 'style': 'form', 'explode': True }})
    size: GetPreviewImageSizeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    height: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPreviewImageHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPreviewImageRequest:
    headers: GetPreviewImageHeaders = dataclasses.field()
    query_params: GetPreviewImageQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPreviewImageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_file_response: Optional[shared_previewfileresponse.PreviewFileResponse] = dataclasses.field(default=None)
    
