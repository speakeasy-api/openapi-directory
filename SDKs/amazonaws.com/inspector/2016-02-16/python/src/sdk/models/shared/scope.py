import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scopetype_enum as shared_scopetype_enum


@dataclass_json
@dataclasses.dataclass
class Scope:
    r"""Scope
    This data type contains key-value pairs that identify various Amazon resources.
    """
    
    key: Optional[shared_scopetype_enum.ScopeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
