import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datapoint as shared_datapoint


@dataclass_json
@dataclasses.dataclass
class GetScalingPlanResourceForecastDataResponse:
    datapoints: list[shared_datapoint.Datapoint] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Datapoints') }})
    
