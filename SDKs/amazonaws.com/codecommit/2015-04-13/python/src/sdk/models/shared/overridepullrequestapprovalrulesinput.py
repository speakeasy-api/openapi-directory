import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import overridestatus_enum as shared_overridestatus_enum


@dataclass_json
@dataclasses.dataclass
class OverridePullRequestApprovalRulesInput:
    override_status: shared_overridestatus_enum.OverrideStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrideStatus') }})
    pull_request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestId') }})
    revision_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    
