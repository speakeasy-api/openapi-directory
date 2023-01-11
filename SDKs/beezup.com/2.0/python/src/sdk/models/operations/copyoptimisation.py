import dataclasses
from typing import Optional
from ..shared import copyoptimisationrequest as shared_copyoptimisationrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import copyoptimisationresponse as shared_copyoptimisationresponse


@dataclasses.dataclass
class CopyOptimisationPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CopyOptimisationRequest:
    path_params: CopyOptimisationPathParams = dataclasses.field()
    request: shared_copyoptimisationrequest.CopyOptimisationRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CopyOptimisationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    copy_optimisation_response: Optional[shared_copyoptimisationresponse.CopyOptimisationResponse] = dataclasses.field(default=None)
    
