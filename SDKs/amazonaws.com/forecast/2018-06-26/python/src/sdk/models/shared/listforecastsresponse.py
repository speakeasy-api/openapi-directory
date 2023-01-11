import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import forecastsummary as shared_forecastsummary


@dataclass_json
@dataclasses.dataclass
class ListForecastsResponse:
    forecasts: Optional[list[shared_forecastsummary.ForecastSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Forecasts') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
