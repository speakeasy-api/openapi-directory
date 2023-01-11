import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import deleteapprovalruletemplateinput as shared_deleteapprovalruletemplateinput
from ..shared import deleteapprovalruletemplateoutput as shared_deleteapprovalruletemplateoutput

class DeleteApprovalRuleTemplateXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_DELETE_APPROVAL_RULE_TEMPLATE = "CodeCommit_20150413.DeleteApprovalRuleTemplate"


@dataclasses.dataclass
class DeleteApprovalRuleTemplateHeaders:
    x_amz_target: DeleteApprovalRuleTemplateXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteApprovalRuleTemplateRequest:
    headers: DeleteApprovalRuleTemplateHeaders = dataclasses.field()
    request: shared_deleteapprovalruletemplateinput.DeleteApprovalRuleTemplateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteApprovalRuleTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    approval_rule_template_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    approval_rule_template_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    delete_approval_rule_template_output: Optional[shared_deleteapprovalruletemplateoutput.DeleteApprovalRuleTemplateOutput] = dataclasses.field(default=None)
    invalid_approval_rule_template_name_exception: Optional[Any] = dataclasses.field(default=None)
    
