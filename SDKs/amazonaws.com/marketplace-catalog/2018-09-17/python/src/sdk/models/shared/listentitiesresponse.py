import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entitysummary as shared_entitysummary


@dataclass_json
@dataclasses.dataclass
class ListEntitiesResponse:
    entity_summary_list: Optional[list[shared_entitysummary.EntitySummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntitySummaryList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
