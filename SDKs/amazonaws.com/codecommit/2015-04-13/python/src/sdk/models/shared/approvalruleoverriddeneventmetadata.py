import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import overridestatus_enum as shared_overridestatus_enum


@dataclass_json
@dataclasses.dataclass
class ApprovalRuleOverriddenEventMetadata:
    r"""ApprovalRuleOverriddenEventMetadata
    Returns information about an override event for approval rules for a pull request.
    """
    
    override_status: Optional[shared_overridestatus_enum.OverrideStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrideStatus') }})
    revision_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    
