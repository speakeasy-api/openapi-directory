import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import storealerts as shared_storealerts


@dataclasses.dataclass
class GetStoreAlertsPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStoreAlertsHeaders:
    if_none_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStoreAlertsRequest:
    headers: GetStoreAlertsHeaders = dataclasses.field()
    path_params: GetStoreAlertsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStoreAlertsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    store_alerts: Optional[shared_storealerts.StoreAlerts] = dataclasses.field(default=None)
    
