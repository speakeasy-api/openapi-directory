import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import trackedclicks as shared_trackedclicks


@dataclasses.dataclass
class GetStoreTrackedClicksPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStoreTrackedClicksQueryParams:
    count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetStoreTrackedClicksRequest:
    path_params: GetStoreTrackedClicksPathParams = dataclasses.field()
    query_params: GetStoreTrackedClicksQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStoreTrackedClicksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    tracked_clicks: Optional[shared_trackedclicks.TrackedClicks] = dataclasses.field(default=None)
    
