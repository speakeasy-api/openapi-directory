import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import approvalstate_enum as shared_approvalstate_enum


@dataclass_json
@dataclasses.dataclass
class UpdatePullRequestApprovalStateInput:
    approval_state: shared_approvalstate_enum.ApprovalStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalState') }})
    pull_request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestId') }})
    revision_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    
