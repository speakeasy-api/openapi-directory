import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mlmodeltype_enum as shared_mlmodeltype_enum


@dataclass_json
@dataclasses.dataclass
class CreateMlModelInput:
    ml_model_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MLModelId') }})
    ml_model_type: shared_mlmodeltype_enum.MlModelTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MLModelType') }})
    training_data_source_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingDataSourceId') }})
    ml_model_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MLModelName') }})
    parameters: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    recipe: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Recipe') }})
    recipe_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecipeUri') }})
    
