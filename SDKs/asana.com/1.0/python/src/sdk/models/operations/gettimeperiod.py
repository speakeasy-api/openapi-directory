import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeperiodresponse as shared_timeperiodresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetTimePeriodPathParams:
    time_period_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'time_period_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTimePeriodQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetTimePeriod200ApplicationJSON:
    data: Optional[shared_timeperiodresponse.TimePeriodResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetTimePeriodRequest:
    path_params: GetTimePeriodPathParams = dataclasses.field()
    query_params: GetTimePeriodQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTimePeriodResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_time_period_200_application_json_object: Optional[GetTimePeriod200ApplicationJSON] = dataclasses.field(default=None)
    
