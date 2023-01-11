import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import updateapprovalruletemplatecontentinput as shared_updateapprovalruletemplatecontentinput
from ..shared import updateapprovalruletemplatecontentoutput as shared_updateapprovalruletemplatecontentoutput

class UpdateApprovalRuleTemplateContentXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_UPDATE_APPROVAL_RULE_TEMPLATE_CONTENT = "CodeCommit_20150413.UpdateApprovalRuleTemplateContent"


@dataclasses.dataclass
class UpdateApprovalRuleTemplateContentHeaders:
    x_amz_target: UpdateApprovalRuleTemplateContentXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateApprovalRuleTemplateContentRequest:
    headers: UpdateApprovalRuleTemplateContentHeaders = dataclasses.field()
    request: shared_updateapprovalruletemplatecontentinput.UpdateApprovalRuleTemplateContentInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateApprovalRuleTemplateContentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    approval_rule_template_content_required_exception: Optional[Any] = dataclasses.field(default=None)
    approval_rule_template_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    approval_rule_template_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_approval_rule_template_content_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_approval_rule_template_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_rule_content_sha256_exception: Optional[Any] = dataclasses.field(default=None)
    update_approval_rule_template_content_output: Optional[shared_updateapprovalruletemplatecontentoutput.UpdateApprovalRuleTemplateContentOutput] = dataclasses.field(default=None)
    
