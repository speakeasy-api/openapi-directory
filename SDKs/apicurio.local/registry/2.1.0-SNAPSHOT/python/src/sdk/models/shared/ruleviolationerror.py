import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ruleviolationcause as shared_ruleviolationcause


@dataclass_json
@dataclasses.dataclass
class RuleViolationError:
    r"""RuleViolationError
    All error responses, whether `4xx` or `5xx` will include one of these as the response
    body.
    """
    
    causes: list[shared_ruleviolationcause.RuleViolationCause] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('causes') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    error_code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
