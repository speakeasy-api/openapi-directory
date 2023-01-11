import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import errorresponsemessagepaymentrequired as shared_errorresponsemessagepaymentrequired


@dataclasses.dataclass
class ShareStorePathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ShareStoreRequest:
    path_params: ShareStorePathParams = dataclasses.field()
    request: str = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ShareStoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    error_response_message_payment_required: Optional[shared_errorresponsemessagepaymentrequired.ErrorResponseMessagePaymentRequired] = dataclasses.field(default=None)
    
