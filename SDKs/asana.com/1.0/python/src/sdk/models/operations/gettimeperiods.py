import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeperiodcompact as shared_timeperiodcompact
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetTimePeriodsQueryParams:
    workspace: str = dataclasses.field(metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    end_on: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end_on', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    start_on: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start_on', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetTimePeriods200ApplicationJSON:
    data: Optional[list[shared_timeperiodcompact.TimePeriodCompact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetTimePeriodsRequest:
    query_params: GetTimePeriodsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTimePeriodsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_time_periods_200_application_json_object: Optional[GetTimePeriods200ApplicationJSON] = dataclasses.field(default=None)
    
