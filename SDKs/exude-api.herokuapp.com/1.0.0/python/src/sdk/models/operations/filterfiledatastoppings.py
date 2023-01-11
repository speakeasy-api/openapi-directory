import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class FilterFileDataStoppingsPathParams:
    type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FilterFileDataStoppingsRequestBodyFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclasses.dataclass
class FilterFileDataStoppingsRequestBody:
    file: Optional[FilterFileDataStoppingsRequestBodyFile] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class FilterFileDataStoppingsRequest:
    path_params: FilterFileDataStoppingsPathParams = dataclasses.field()
    request: FilterFileDataStoppingsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class FilterFileDataStoppingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    exude_response_bean: Optional[Any] = dataclasses.field(default=None)
    
