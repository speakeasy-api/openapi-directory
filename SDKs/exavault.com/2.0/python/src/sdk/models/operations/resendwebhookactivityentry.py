import dataclasses
from typing import Optional
from ..shared import emptyresponse as shared_emptyresponse


@dataclasses.dataclass
class ResendWebhookActivityEntryPathParams:
    activity_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'activityId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ResendWebhookActivityEntryHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ResendWebhookActivityEntryRequest:
    headers: ResendWebhookActivityEntryHeaders = dataclasses.field()
    path_params: ResendWebhookActivityEntryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ResendWebhookActivityEntryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty_response: Optional[shared_emptyresponse.EmptyResponse] = dataclasses.field(default=None)
    
