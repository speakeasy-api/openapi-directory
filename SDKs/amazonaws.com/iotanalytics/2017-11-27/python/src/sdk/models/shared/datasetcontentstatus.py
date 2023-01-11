import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasetcontentstate_enum as shared_datasetcontentstate_enum


@dataclass_json
@dataclasses.dataclass
class DatasetContentStatus:
    r"""DatasetContentStatus
    The state of the dataset contents and the reason they are in this state.
    """
    
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    state: Optional[shared_datasetcontentstate_enum.DatasetContentStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
