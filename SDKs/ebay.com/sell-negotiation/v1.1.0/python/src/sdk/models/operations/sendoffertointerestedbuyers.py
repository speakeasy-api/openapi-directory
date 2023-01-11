import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import createoffersrequest as shared_createoffersrequest
from ..shared import sendoffertointerestedbuyerscollectionresponse as shared_sendoffertointerestedbuyerscollectionresponse


@dataclasses.dataclass
class SendOfferToInterestedBuyersHeaders:
    x_ebay_c_marketplace_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SendOfferToInterestedBuyersSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SendOfferToInterestedBuyersRequest:
    headers: SendOfferToInterestedBuyersHeaders = dataclasses.field()
    security: SendOfferToInterestedBuyersSecurity = dataclasses.field()
    request: Optional[shared_createoffersrequest.CreateOffersRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SendOfferToInterestedBuyersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    send_offer_to_interested_buyers_collection_response: Optional[shared_sendoffertointerestedbuyerscollectionresponse.SendOfferToInterestedBuyersCollectionResponse] = dataclasses.field(default=None)
    
