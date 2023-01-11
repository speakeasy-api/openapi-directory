import dataclasses
from typing import Any,Optional
from ..shared import defaultpayload as shared_defaultpayload


@dataclasses.dataclass
class GetURLDetailPathParams:
    analysis_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'analysis_slug', 'style': 'simple', 'explode': False }})
    project_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_slug', 'style': 'simple', 'explode': False }})
    url: str = dataclasses.field(metadata={'path_param': { 'field_name': 'url', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetURLDetailQueryParams:
    fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetURLDetailRequest:
    path_params: GetURLDetailPathParams = dataclasses.field()
    query_params: GetURLDetailQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetURLDetailResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    default_payload: Optional[shared_defaultpayload.DefaultPayload] = dataclasses.field(default=None)
    url_detail: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
