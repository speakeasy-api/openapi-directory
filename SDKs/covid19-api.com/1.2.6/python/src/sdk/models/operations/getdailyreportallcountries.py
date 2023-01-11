import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetDailyReportAllCountriesDateFormatEnum(str, Enum):
    YYYY_MM_DD = "YYYY-MM-DD"
    YYYY_DD_MM = "YYYY-DD-MM"
    DD_MM_YYYY = "DD-MM-YYYY"
    MM_DD_YYYY = "MM-DD-YYYY"

class GetDailyReportAllCountriesFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclasses.dataclass
class GetDailyReportAllCountriesQueryParams:
    date_: str = dataclasses.field(metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    date_format: Optional[GetDailyReportAllCountriesDateFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date-format', 'style': 'form', 'explode': True }})
    format: Optional[GetDailyReportAllCountriesFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetDailyReportAllCountries200ApplicationJSONProvince:
    active: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    confirmed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmed') }})
    deaths: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deaths') }})
    recovered: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recovered') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDailyReportAllCountries200ApplicationJSON:
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    date_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    latitude: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    province: Optional[list[GetDailyReportAllCountries200ApplicationJSONProvince]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('province') }})
    

@dataclasses.dataclass
class GetDailyReportAllCountriesRequest:
    query_params: GetDailyReportAllCountriesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDailyReportAllCountriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_daily_report_all_countries_200_application_json_objects: Optional[list[GetDailyReportAllCountries200ApplicationJSON]] = dataclasses.field(default=None)
    
