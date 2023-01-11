import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import approvalruleeventmetadata as shared_approvalruleeventmetadata
from ..shared import approvalruleoverriddeneventmetadata as shared_approvalruleoverriddeneventmetadata
from ..shared import approvalstatechangedeventmetadata as shared_approvalstatechangedeventmetadata
from ..shared import pullrequestcreatedeventmetadata as shared_pullrequestcreatedeventmetadata
from ..shared import pullrequesteventtype_enum as shared_pullrequesteventtype_enum
from ..shared import pullrequestmergedstatechangedeventmetadata as shared_pullrequestmergedstatechangedeventmetadata
from ..shared import pullrequestsourcereferenceupdatedeventmetadata as shared_pullrequestsourcereferenceupdatedeventmetadata
from ..shared import pullrequeststatuschangedeventmetadata as shared_pullrequeststatuschangedeventmetadata


@dataclass_json
@dataclasses.dataclass
class PullRequestEvent:
    r"""PullRequestEvent
    Returns information about a pull request event.
    """
    
    actor_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actorArn') }})
    approval_rule_event_metadata: Optional[shared_approvalruleeventmetadata.ApprovalRuleEventMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleEventMetadata') }})
    approval_rule_overridden_event_metadata: Optional[shared_approvalruleoverriddeneventmetadata.ApprovalRuleOverriddenEventMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleOverriddenEventMetadata') }})
    approval_state_changed_event_metadata: Optional[shared_approvalstatechangedeventmetadata.ApprovalStateChangedEventMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalStateChangedEventMetadata') }})
    event_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pull_request_created_event_metadata: Optional[shared_pullrequestcreatedeventmetadata.PullRequestCreatedEventMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestCreatedEventMetadata') }})
    pull_request_event_type: Optional[shared_pullrequesteventtype_enum.PullRequestEventTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestEventType') }})
    pull_request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestId') }})
    pull_request_merged_state_changed_event_metadata: Optional[shared_pullrequestmergedstatechangedeventmetadata.PullRequestMergedStateChangedEventMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestMergedStateChangedEventMetadata') }})
    pull_request_source_reference_updated_event_metadata: Optional[shared_pullrequestsourcereferenceupdatedeventmetadata.PullRequestSourceReferenceUpdatedEventMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestSourceReferenceUpdatedEventMetadata') }})
    pull_request_status_changed_event_metadata: Optional[shared_pullrequeststatuschangedeventmetadata.PullRequestStatusChangedEventMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestStatusChangedEventMetadata') }})
    
