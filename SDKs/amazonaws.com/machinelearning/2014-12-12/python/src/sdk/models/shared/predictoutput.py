import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import prediction as shared_prediction


@dataclass_json
@dataclasses.dataclass
class PredictOutput:
    prediction: Optional[shared_prediction.Prediction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Prediction') }})
    
