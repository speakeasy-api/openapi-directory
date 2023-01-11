import dataclasses
from typing import Optional
from ..shared import resourceresponse as shared_resourceresponse


@dataclasses.dataclass
class UploadFileQueryParams:
    file_size: int = dataclasses.field(metadata={'query_param': { 'field_name': 'fileSize', 'style': 'form', 'explode': True }})
    path: str = dataclasses.field(metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    allow_overwrite: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allowOverwrite', 'style': 'form', 'explode': True }})
    resume: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resume', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UploadFileHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    offset_bytes: Optional[int] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'offsetBytes', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UploadFileRequestBodyFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclasses.dataclass
class UploadFileRequestBody:
    file: Optional[UploadFileRequestBodyFile] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class UploadFileRequest:
    headers: UploadFileHeaders = dataclasses.field()
    query_params: UploadFileQueryParams = dataclasses.field()
    request: Optional[UploadFileRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UploadFileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_response: Optional[shared_resourceresponse.ResourceResponse] = dataclasses.field(default=None)
    
