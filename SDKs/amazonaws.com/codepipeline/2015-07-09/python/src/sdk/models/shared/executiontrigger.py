import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import triggertype_enum as shared_triggertype_enum


@dataclass_json
@dataclasses.dataclass
class ExecutionTrigger:
    r"""ExecutionTrigger
    The interaction or event that started a pipeline execution.
    """
    
    trigger_detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerDetail') }})
    trigger_type: Optional[shared_triggertype_enum.TriggerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerType') }})
    
