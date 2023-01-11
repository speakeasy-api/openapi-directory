import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import solutionconfig as shared_solutionconfig


@dataclass_json
@dataclasses.dataclass
class CreateSolutionRequest:
    dataset_group_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetGroupArn') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    event_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    perform_auto_ml: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performAutoML') }})
    perform_hpo: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performHPO') }})
    recipe_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipeArn') }})
    solution_config: Optional[shared_solutionconfig.SolutionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solutionConfig') }})
    
