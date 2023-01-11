import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import forecast as shared_forecast


@dataclass_json
@dataclasses.dataclass
class QueryForecastResponse:
    forecast: Optional[shared_forecast.Forecast] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Forecast') }})
    
