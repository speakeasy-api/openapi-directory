import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateForecastRequest:
    forecast_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForecastName') }})
    predictor_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictorArn') }})
    forecast_types: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForecastTypes') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
