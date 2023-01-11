import dataclasses
from typing import Optional
from ..shared import changeorderlistrequest as shared_changeorderlistrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import batchorderoperationresponse as shared_batchorderoperationresponse


@dataclasses.dataclass
class ChangeOrderListPathParams:
    change_order_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'changeOrderType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ChangeOrderListQueryParams:
    user_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'userName', 'style': 'form', 'explode': True }})
    test_mode: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'testMode', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ChangeOrderListRequest:
    path_params: ChangeOrderListPathParams = dataclasses.field()
    query_params: ChangeOrderListQueryParams = dataclasses.field()
    request: shared_changeorderlistrequest.ChangeOrderListRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ChangeOrderListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    batch_order_operation_response: Optional[shared_batchorderoperationresponse.BatchOrderOperationResponse] = dataclasses.field(default=None)
    
