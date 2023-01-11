import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datapoint as shared_datapoint


@dataclass_json
@dataclasses.dataclass
class Forecast:
    r"""Forecast
    Provides information about a forecast. Returned as part of the <a>QueryForecast</a> response.
    """
    
    predictions: Optional[dict[str, list[shared_datapoint.DataPoint]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Predictions') }})
    
