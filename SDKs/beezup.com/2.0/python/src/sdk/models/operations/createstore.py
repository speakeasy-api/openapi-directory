import dataclasses
from typing import Optional
from ..shared import createstorerequest as shared_createstorerequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import errorresponsemessagepaymentrequired as shared_errorresponsemessagepaymentrequired
from ..shared import links_getstorelink as shared_links_getstorelink


@dataclasses.dataclass
class CreateStoreRequest:
    request: shared_createstorerequest.CreateStoreRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateStoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    error_response_message_payment_required: Optional[shared_errorresponsemessagepaymentrequired.ErrorResponseMessagePaymentRequired] = dataclasses.field(default=None)
    links_get_store_link: Optional[shared_links_getstorelink.LinksGetStoreLink] = dataclasses.field(default=None)
    
