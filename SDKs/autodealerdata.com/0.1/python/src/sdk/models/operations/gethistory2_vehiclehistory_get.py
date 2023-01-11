import dataclasses
from typing import Optional
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import historyresp as shared_historyresp


@dataclasses.dataclass
class GetHistory2VehicleHistoryGetQueryParams:
    jwt: str = dataclasses.field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    vin: str = dataclasses.field(metadata={'query_param': { 'field_name': 'vin', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetHistory2VehicleHistoryGetRequest:
    query_params: GetHistory2VehicleHistoryGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetHistory2VehicleHistoryGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    history_resp: Optional[shared_historyresp.HistoryResp] = dataclasses.field(default=None)
    
