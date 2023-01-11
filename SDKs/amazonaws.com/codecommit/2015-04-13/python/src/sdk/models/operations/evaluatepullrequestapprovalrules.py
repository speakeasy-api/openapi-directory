import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import evaluatepullrequestapprovalrulesinput as shared_evaluatepullrequestapprovalrulesinput
from ..shared import evaluatepullrequestapprovalrulesoutput as shared_evaluatepullrequestapprovalrulesoutput

class EvaluatePullRequestApprovalRulesXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_EVALUATE_PULL_REQUEST_APPROVAL_RULES = "CodeCommit_20150413.EvaluatePullRequestApprovalRules"


@dataclasses.dataclass
class EvaluatePullRequestApprovalRulesHeaders:
    x_amz_target: EvaluatePullRequestApprovalRulesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EvaluatePullRequestApprovalRulesRequest:
    headers: EvaluatePullRequestApprovalRulesHeaders = dataclasses.field()
    request: shared_evaluatepullrequestapprovalrulesinput.EvaluatePullRequestApprovalRulesInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EvaluatePullRequestApprovalRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    encryption_integrity_checks_failed_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_disabled_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    evaluate_pull_request_approval_rules_output: Optional[shared_evaluatepullrequestapprovalrulesoutput.EvaluatePullRequestApprovalRulesOutput] = dataclasses.field(default=None)
    invalid_pull_request_id_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_revision_id_exception: Optional[Any] = dataclasses.field(default=None)
    pull_request_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    pull_request_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    revision_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    revision_not_current_exception: Optional[Any] = dataclasses.field(default=None)
    
