import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entitiesdetectionjobfilter as shared_entitiesdetectionjobfilter


@dataclass_json
@dataclasses.dataclass
class ListEntitiesDetectionJobsRequest:
    filter: Optional[shared_entitiesdetectionjobfilter.EntitiesDetectionJobFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filter') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
