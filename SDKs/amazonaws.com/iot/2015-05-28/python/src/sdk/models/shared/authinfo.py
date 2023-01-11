import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actiontype_enum as shared_actiontype_enum


@dataclass_json
@dataclasses.dataclass
class AuthInfo:
    r"""AuthInfo
    A collection of authorization information.
    """
    
    resources: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    action_type: Optional[shared_actiontype_enum.ActionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionType') }})
    
