import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import retryaction_enum as shared_retryaction_enum


@dataclass_json
@dataclasses.dataclass
class EvaluateOnExit:
    r"""EvaluateOnExit
    Specifies a set of conditions to be met, and an action to take (<code>RETRY</code> or <code>EXIT</code>) if all conditions are met.
    """
    
    action: shared_retryaction_enum.RetryActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    on_exit_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onExitCode') }})
    on_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onReason') }})
    on_status_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onStatusReason') }})
    
