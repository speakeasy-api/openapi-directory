import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listassociatedapprovalruletemplatesforrepositoryinput as shared_listassociatedapprovalruletemplatesforrepositoryinput
from ..shared import listassociatedapprovalruletemplatesforrepositoryoutput as shared_listassociatedapprovalruletemplatesforrepositoryoutput


@dataclasses.dataclass
class ListAssociatedApprovalRuleTemplatesForRepositoryQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListAssociatedApprovalRuleTemplatesForRepositoryXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_LIST_ASSOCIATED_APPROVAL_RULE_TEMPLATES_FOR_REPOSITORY = "CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository"


@dataclasses.dataclass
class ListAssociatedApprovalRuleTemplatesForRepositoryHeaders:
    x_amz_target: ListAssociatedApprovalRuleTemplatesForRepositoryXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListAssociatedApprovalRuleTemplatesForRepositoryRequest:
    headers: ListAssociatedApprovalRuleTemplatesForRepositoryHeaders = dataclasses.field()
    query_params: ListAssociatedApprovalRuleTemplatesForRepositoryQueryParams = dataclasses.field()
    request: shared_listassociatedapprovalruletemplatesforrepositoryinput.ListAssociatedApprovalRuleTemplatesForRepositoryInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListAssociatedApprovalRuleTemplatesForRepositoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    encryption_integrity_checks_failed_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_disabled_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_continuation_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_max_results_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_repository_name_exception: Optional[Any] = dataclasses.field(default=None)
    list_associated_approval_rule_templates_for_repository_output: Optional[shared_listassociatedapprovalruletemplatesforrepositoryoutput.ListAssociatedApprovalRuleTemplatesForRepositoryOutput] = dataclasses.field(default=None)
    repository_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    repository_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    
