import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import modelsummary as shared_modelsummary


@dataclass_json
@dataclasses.dataclass
class ListModelsResponse:
    model_summaries: Optional[list[shared_modelsummary.ModelSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
