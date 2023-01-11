import dataclasses
from typing import Optional
from ..shared import savestorealertrequest as shared_savestorealertrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage


@dataclasses.dataclass
class SaveStoreAlertsPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SaveStoreAlertsRequest:
    path_params: SaveStoreAlertsPathParams = dataclasses.field()
    request: dict[str, shared_savestorealertrequest.SaveStoreAlertRequest] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SaveStoreAlertsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    
