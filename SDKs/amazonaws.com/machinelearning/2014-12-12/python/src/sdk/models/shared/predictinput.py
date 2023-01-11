import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PredictInput:
    ml_model_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MLModelId') }})
    predict_endpoint: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictEndpoint') }})
    record: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Record') }})
    
