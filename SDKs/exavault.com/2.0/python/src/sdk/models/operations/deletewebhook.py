import dataclasses
from typing import Optional
from ..shared import emptyresponse as shared_emptyresponse


@dataclasses.dataclass
class DeleteWebhookPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteWebhookHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteWebhookRequest:
    headers: DeleteWebhookHeaders = dataclasses.field()
    path_params: DeleteWebhookPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty_response: Optional[shared_emptyresponse.EmptyResponse] = dataclasses.field(default=None)
    
