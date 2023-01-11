import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateBatchPredictionInput:
    batch_prediction_data_source_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchPredictionDataSourceId') }})
    batch_prediction_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchPredictionId') }})
    ml_model_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MLModelId') }})
    output_uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputUri') }})
    batch_prediction_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchPredictionName') }})
    
