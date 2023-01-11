import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasetgroupsummary as shared_datasetgroupsummary


@dataclass_json
@dataclasses.dataclass
class ListDatasetGroupsResponse:
    dataset_groups: Optional[list[shared_datasetgroupsummary.DatasetGroupSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetGroups') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
