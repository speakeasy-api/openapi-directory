import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addonissuecode_enum as shared_addonissuecode_enum


@dataclass_json
@dataclasses.dataclass
class AddonIssue:
    r"""AddonIssue
    An issue related to an add-on.
    """
    
    code: Optional[shared_addonissuecode_enum.AddonIssueCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    resource_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceIds') }})
    
