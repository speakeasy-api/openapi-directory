import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetDailyReportTotalsDateFormatEnum(str, Enum):
    YYYY_MM_DD = "YYYY-MM-DD"
    YYYY_DD_MM = "YYYY-DD-MM"
    DD_MM_YYYY = "DD-MM-YYYY"
    MM_DD_YYYY = "MM-DD-YYYY"

class GetDailyReportTotalsFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclasses.dataclass
class GetDailyReportTotalsQueryParams:
    date_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    date_format: Optional[GetDailyReportTotalsDateFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date-format', 'style': 'form', 'explode': True }})
    format: Optional[GetDailyReportTotalsFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetDailyReportTotals200ApplicationJSON:
    active: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    confirmed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmed') }})
    critical: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('critical') }})
    date_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    deaths: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deaths') }})
    recovered: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recovered') }})
    

@dataclasses.dataclass
class GetDailyReportTotalsRequest:
    query_params: GetDailyReportTotalsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDailyReportTotalsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_daily_report_totals_200_application_json_objects: Optional[list[GetDailyReportTotals200ApplicationJSON]] = dataclasses.field(default=None)
    
