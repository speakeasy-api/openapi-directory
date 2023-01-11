import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasetactiontype_enum as shared_datasetactiontype_enum


@dataclass_json
@dataclasses.dataclass
class DatasetActionSummary:
    r"""DatasetActionSummary
    Information about the action that automatically creates the dataset's contents.
    """
    
    action_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionName') }})
    action_type: Optional[shared_datasetactiontype_enum.DatasetActionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionType') }})
    
