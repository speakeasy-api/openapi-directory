import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateEvaluationInput:
    evaluation_data_source_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationDataSourceId') }})
    evaluation_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationId') }})
    ml_model_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MLModelId') }})
    evaluation_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationName') }})
    
