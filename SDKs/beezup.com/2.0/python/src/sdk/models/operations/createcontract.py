import dataclasses
from typing import Optional
from ..shared import offerrequest as shared_offerrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import createcontractresponse as shared_createcontractresponse


@dataclasses.dataclass
class CreateContractRequest:
    request: shared_offerrequest.OfferRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateContractResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    create_contract_response: Optional[shared_createcontractresponse.CreateContractResponse] = dataclasses.field(default=None)
    
