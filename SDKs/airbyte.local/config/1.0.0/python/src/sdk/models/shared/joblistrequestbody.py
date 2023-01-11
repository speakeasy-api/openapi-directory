import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobconfigtype_enum as shared_jobconfigtype_enum
from ..shared import pagination as shared_pagination


@dataclass_json
@dataclasses.dataclass
class JobListRequestBody:
    config_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configId') }})
    config_types: list[shared_jobconfigtype_enum.JobConfigTypeEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configTypes') }})
    pagination: Optional[shared_pagination.Pagination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    
