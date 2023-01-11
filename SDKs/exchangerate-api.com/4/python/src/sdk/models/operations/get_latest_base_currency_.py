import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetLatestBaseCurrencyPathParams:
    base_currency: str = dataclasses.field(metadata={'path_param': { 'field_name': 'base_currency', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetLatestBaseCurrency200ApplicationJSON:
    base: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base') }})
    date_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    rates: Optional[dict[str, float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rates') }})
    time_last_updated: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_last_updated') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLatestBaseCurrency404ApplicationJSON:
    error_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_type') }})
    result: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetLatestBaseCurrencyRequest:
    path_params: GetLatestBaseCurrencyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLatestBaseCurrencyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_latest_base_currency_200_application_json_object: Optional[GetLatestBaseCurrency200ApplicationJSON] = dataclasses.field(default=None)
    get_latest_base_currency_404_application_json_object: Optional[GetLatestBaseCurrency404ApplicationJSON] = dataclasses.field(default=None)
    
