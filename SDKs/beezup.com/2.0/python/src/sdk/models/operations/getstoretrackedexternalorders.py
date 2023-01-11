import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import trackedexternalorders as shared_trackedexternalorders


@dataclasses.dataclass
class GetStoreTrackedExternalOrdersPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStoreTrackedExternalOrdersQueryParams:
    count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetStoreTrackedExternalOrdersRequest:
    path_params: GetStoreTrackedExternalOrdersPathParams = dataclasses.field()
    query_params: GetStoreTrackedExternalOrdersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStoreTrackedExternalOrdersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    tracked_external_orders: Optional[shared_trackedexternalorders.TrackedExternalOrders] = dataclasses.field(default=None)
    
