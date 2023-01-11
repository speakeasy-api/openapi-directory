import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import trackedorders as shared_trackedorders


@dataclasses.dataclass
class GetStoreTrackedOrdersPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStoreTrackedOrdersQueryParams:
    count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetStoreTrackedOrdersRequest:
    path_params: GetStoreTrackedOrdersPathParams = dataclasses.field()
    query_params: GetStoreTrackedOrdersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStoreTrackedOrdersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    tracked_orders: Optional[shared_trackedorders.TrackedOrders] = dataclasses.field(default=None)
    
