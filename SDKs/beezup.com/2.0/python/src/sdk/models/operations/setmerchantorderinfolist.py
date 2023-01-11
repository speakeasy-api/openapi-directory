import dataclasses
from typing import Optional
from ..shared import setmerchantorderinfolistrequest as shared_setmerchantorderinfolistrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import batchorderoperationresponse as shared_batchorderoperationresponse


@dataclasses.dataclass
class SetMerchantOrderInfoListRequest:
    request: shared_setmerchantorderinfolistrequest.SetMerchantOrderInfoListRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SetMerchantOrderInfoListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    batch_order_operation_response: Optional[shared_batchorderoperationresponse.BatchOrderOperationResponse] = dataclasses.field(default=None)
    
