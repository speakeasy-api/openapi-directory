import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import storetrackingstatus as shared_storetrackingstatus


@dataclasses.dataclass
class GetStoreTrackingStatusPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStoreTrackingStatusRequest:
    path_params: GetStoreTrackingStatusPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStoreTrackingStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    store_tracking_status: Optional[shared_storetrackingstatus.StoreTrackingStatus] = dataclasses.field(default=None)
    
