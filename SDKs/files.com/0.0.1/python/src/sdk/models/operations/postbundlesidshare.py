import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PostBundlesIDSharePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostBundlesIDShareRequestBody:
    note: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'note' }})
    recipients: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'recipients', 'json': True }})
    to: Optional[list[str]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'to', 'json': True }})
    

@dataclasses.dataclass
class PostBundlesIDShareRequest:
    path_params: PostBundlesIDSharePathParams = dataclasses.field()
    request: Optional[PostBundlesIDShareRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostBundlesIDShareResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
