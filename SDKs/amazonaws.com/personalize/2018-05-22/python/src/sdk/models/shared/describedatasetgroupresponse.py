import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasetgroup as shared_datasetgroup


@dataclass_json
@dataclasses.dataclass
class DescribeDatasetGroupResponse:
    dataset_group: Optional[shared_datasetgroup.DatasetGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetGroup') }})
    
