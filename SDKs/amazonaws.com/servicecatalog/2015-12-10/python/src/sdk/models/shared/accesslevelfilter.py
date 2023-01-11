import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accesslevelfilterkey_enum as shared_accesslevelfilterkey_enum


@dataclass_json
@dataclasses.dataclass
class AccessLevelFilter:
    r"""AccessLevelFilter
    The access level to use to filter results.
    """
    
    key: Optional[shared_accesslevelfilterkey_enum.AccessLevelFilterKeyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
