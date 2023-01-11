import dataclasses
from typing import Optional
from ..shared import clearmerchantorderinfolistrequest as shared_clearmerchantorderinfolistrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import batchorderoperationresponse as shared_batchorderoperationresponse
from ..shared import errorresponsemessage as shared_errorresponsemessage


@dataclasses.dataclass
class ClearMerchantOrderInfoListV3QueryParams:
    test_mode: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'testMode', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ClearMerchantOrderInfoListV3Request:
    query_params: ClearMerchantOrderInfoListV3QueryParams = dataclasses.field()
    request: shared_clearmerchantorderinfolistrequest.ClearMerchantOrderInfoListRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ClearMerchantOrderInfoListV3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    batch_order_operation_response: Optional[shared_batchorderoperationresponse.BatchOrderOperationResponse] = dataclasses.field(default=None)
    error_response_message: Optional[shared_errorresponsemessage.ErrorResponseMessage] = dataclasses.field(default=None)
    
