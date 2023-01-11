import dataclasses
from typing import Optional
from ..shared import activatesubscriptionrequest as shared_activatesubscriptionrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import errorresponsemessage as shared_errorresponsemessage


@dataclasses.dataclass
class ActivateSubscriptionPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActivateSubscriptionRequest:
    path_params: ActivateSubscriptionPathParams = dataclasses.field()
    request: Optional[shared_activatesubscriptionrequest.ActivateSubscriptionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ActivateSubscriptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    error_response_message: Optional[shared_errorresponsemessage.ErrorResponseMessage] = dataclasses.field(default=None)
    
