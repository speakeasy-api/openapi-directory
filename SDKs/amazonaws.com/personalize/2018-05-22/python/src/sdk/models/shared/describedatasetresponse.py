import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dataset as shared_dataset


@dataclass_json
@dataclasses.dataclass
class DescribeDatasetResponse:
    dataset: Optional[shared_dataset.Dataset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataset') }})
    
