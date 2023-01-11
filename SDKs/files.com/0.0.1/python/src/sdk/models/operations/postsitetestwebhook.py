import dataclasses
from typing import Any,Optional
from ..shared import statusentity as shared_statusentity


@dataclasses.dataclass
class PostSiteTestWebhookRequestBody:
    url: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'url' }})
    action: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'action' }})
    body: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'body', 'json': True }})
    encoding: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'encoding' }})
    headers: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'headers', 'json': True }})
    method: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'method' }})
    

@dataclasses.dataclass
class PostSiteTestWebhookRequest:
    request: PostSiteTestWebhookRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostSiteTestWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    status_entity: Optional[shared_statusentity.StatusEntity] = dataclasses.field(default=None)
    
