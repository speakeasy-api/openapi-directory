import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import deletepullrequestapprovalruleinput as shared_deletepullrequestapprovalruleinput
from ..shared import deletepullrequestapprovalruleoutput as shared_deletepullrequestapprovalruleoutput

class DeletePullRequestApprovalRuleXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_DELETE_PULL_REQUEST_APPROVAL_RULE = "CodeCommit_20150413.DeletePullRequestApprovalRule"


@dataclasses.dataclass
class DeletePullRequestApprovalRuleHeaders:
    x_amz_target: DeletePullRequestApprovalRuleXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePullRequestApprovalRuleRequest:
    headers: DeletePullRequestApprovalRuleHeaders = dataclasses.field()
    request: shared_deletepullrequestapprovalruleinput.DeletePullRequestApprovalRuleInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeletePullRequestApprovalRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    approval_rule_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    cannot_delete_approval_rule_from_template_exception: Optional[Any] = dataclasses.field(default=None)
    delete_pull_request_approval_rule_output: Optional[shared_deletepullrequestapprovalruleoutput.DeletePullRequestApprovalRuleOutput] = dataclasses.field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_disabled_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_approval_rule_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_pull_request_id_exception: Optional[Any] = dataclasses.field(default=None)
    pull_request_already_closed_exception: Optional[Any] = dataclasses.field(default=None)
    pull_request_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    pull_request_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    
