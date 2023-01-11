import dataclasses
from typing import Optional
from ..shared import changeorderlistrequestv2 as shared_changeorderlistrequestv2
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import batchorderoperationresponse as shared_batchorderoperationresponse
from ..shared import errorresponsemessage as shared_errorresponsemessage


@dataclasses.dataclass
class ChangeOrderListV2PathParams:
    change_order_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'changeOrderType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ChangeOrderListV2QueryParams:
    user_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'userName', 'style': 'form', 'explode': True }})
    test_mode: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'testMode', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ChangeOrderListV2Request:
    path_params: ChangeOrderListV2PathParams = dataclasses.field()
    query_params: ChangeOrderListV2QueryParams = dataclasses.field()
    request: shared_changeorderlistrequestv2.ChangeOrderListRequestV2 = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ChangeOrderListV2Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    batch_order_operation_response: Optional[shared_batchorderoperationresponse.BatchOrderOperationResponse] = dataclasses.field(default=None)
    error_response_message: Optional[shared_errorresponsemessage.ErrorResponseMessage] = dataclasses.field(default=None)
    
