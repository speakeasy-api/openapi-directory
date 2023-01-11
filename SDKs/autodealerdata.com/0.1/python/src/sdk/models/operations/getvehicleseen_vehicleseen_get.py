import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import booleanresp as shared_booleanresp
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class GetVehicleSeenVehicleSeenGetQueryParams:
    after_date: date = dataclasses.field(metadata={'query_param': { 'field_name': 'afterDate', 'style': 'form', 'explode': True }})
    jwt: str = dataclasses.field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    vin: str = dataclasses.field(metadata={'query_param': { 'field_name': 'vin', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVehicleSeenVehicleSeenGetRequest:
    query_params: GetVehicleSeenVehicleSeenGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVehicleSeenVehicleSeenGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    boolean_resp: Optional[shared_booleanresp.BooleanResp] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    
