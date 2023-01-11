import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import updatepullrequestapprovalrulecontentinput as shared_updatepullrequestapprovalrulecontentinput
from ..shared import updatepullrequestapprovalrulecontentoutput as shared_updatepullrequestapprovalrulecontentoutput

class UpdatePullRequestApprovalRuleContentXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_UPDATE_PULL_REQUEST_APPROVAL_RULE_CONTENT = "CodeCommit_20150413.UpdatePullRequestApprovalRuleContent"


@dataclasses.dataclass
class UpdatePullRequestApprovalRuleContentHeaders:
    x_amz_target: UpdatePullRequestApprovalRuleContentXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePullRequestApprovalRuleContentRequest:
    headers: UpdatePullRequestApprovalRuleContentHeaders = dataclasses.field()
    request: shared_updatepullrequestapprovalrulecontentinput.UpdatePullRequestApprovalRuleContentInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdatePullRequestApprovalRuleContentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    approval_rule_content_required_exception: Optional[Any] = dataclasses.field(default=None)
    approval_rule_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    approval_rule_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    cannot_modify_approval_rule_from_template_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_disabled_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_approval_rule_content_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_approval_rule_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_pull_request_id_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_rule_content_sha256_exception: Optional[Any] = dataclasses.field(default=None)
    pull_request_already_closed_exception: Optional[Any] = dataclasses.field(default=None)
    pull_request_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    pull_request_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    update_pull_request_approval_rule_content_output: Optional[shared_updatepullrequestapprovalrulecontentoutput.UpdatePullRequestApprovalRuleContentOutput] = dataclasses.field(default=None)
    
