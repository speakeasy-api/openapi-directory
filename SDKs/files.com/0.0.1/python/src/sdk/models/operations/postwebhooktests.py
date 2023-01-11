import dataclasses
from typing import Any,Optional
from ..shared import webhooktestentity as shared_webhooktestentity


@dataclasses.dataclass
class PostWebhookTestsRequestBody:
    url: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'url' }})
    action: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'action' }})
    body: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'body', 'json': True }})
    encoding: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'encoding' }})
    file_as_body: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'file_as_body' }})
    file_form_field: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'file_form_field' }})
    headers: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'headers', 'json': True }})
    method: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'method' }})
    raw_body: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'raw_body' }})
    

@dataclasses.dataclass
class PostWebhookTestsRequest:
    request: PostWebhookTestsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostWebhookTestsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    webhook_test_entity: Optional[shared_webhooktestentity.WebhookTestEntity] = dataclasses.field(default=None)
    
