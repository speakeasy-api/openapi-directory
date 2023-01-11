import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerrecipesummary as shared_containerrecipesummary


@dataclass_json
@dataclasses.dataclass
class ListContainerRecipesResponse:
    container_recipe_summary_list: Optional[list[shared_containerrecipesummary.ContainerRecipeSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerRecipeSummaryList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
