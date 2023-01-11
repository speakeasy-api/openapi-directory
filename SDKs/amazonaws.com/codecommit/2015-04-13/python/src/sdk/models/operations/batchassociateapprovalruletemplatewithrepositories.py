import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import batchassociateapprovalruletemplatewithrepositoriesinput as shared_batchassociateapprovalruletemplatewithrepositoriesinput
from ..shared import batchassociateapprovalruletemplatewithrepositoriesoutput as shared_batchassociateapprovalruletemplatewithrepositoriesoutput

class BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_BATCH_ASSOCIATE_APPROVAL_RULE_TEMPLATE_WITH_REPOSITORIES = "CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories"


@dataclasses.dataclass
class BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders:
    x_amz_target: BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BatchAssociateApprovalRuleTemplateWithRepositoriesRequest:
    headers: BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders = dataclasses.field()
    request: shared_batchassociateapprovalruletemplatewithrepositoriesinput.BatchAssociateApprovalRuleTemplateWithRepositoriesInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchAssociateApprovalRuleTemplateWithRepositoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    approval_rule_template_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    approval_rule_template_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    batch_associate_approval_rule_template_with_repositories_output: Optional[shared_batchassociateapprovalruletemplatewithrepositoriesoutput.BatchAssociateApprovalRuleTemplateWithRepositoriesOutput] = dataclasses.field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_disabled_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_approval_rule_template_name_exception: Optional[Any] = dataclasses.field(default=None)
    maximum_repository_names_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    repository_names_required_exception: Optional[Any] = dataclasses.field(default=None)
    
