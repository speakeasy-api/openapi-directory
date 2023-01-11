import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import overridepullrequestapprovalrulesinput as shared_overridepullrequestapprovalrulesinput

class OverridePullRequestApprovalRulesXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_OVERRIDE_PULL_REQUEST_APPROVAL_RULES = "CodeCommit_20150413.OverridePullRequestApprovalRules"


@dataclasses.dataclass
class OverridePullRequestApprovalRulesHeaders:
    x_amz_target: OverridePullRequestApprovalRulesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OverridePullRequestApprovalRulesRequest:
    headers: OverridePullRequestApprovalRulesHeaders = dataclasses.field()
    request: shared_overridepullrequestapprovalrulesinput.OverridePullRequestApprovalRulesInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class OverridePullRequestApprovalRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    encryption_integrity_checks_failed_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_disabled_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_override_status_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_pull_request_id_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_revision_id_exception: Optional[Any] = dataclasses.field(default=None)
    override_already_set_exception: Optional[Any] = dataclasses.field(default=None)
    override_status_required_exception: Optional[Any] = dataclasses.field(default=None)
    pull_request_already_closed_exception: Optional[Any] = dataclasses.field(default=None)
    pull_request_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    pull_request_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    revision_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    revision_not_current_exception: Optional[Any] = dataclasses.field(default=None)
    
