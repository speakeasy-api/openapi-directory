import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import originapprovalruletemplate as shared_originapprovalruletemplate


@dataclass_json
@dataclasses.dataclass
class ApprovalRule:
    r"""ApprovalRule
    Returns information about an approval rule.
    """
    
    approval_rule_content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleContent') }})
    approval_rule_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleId') }})
    approval_rule_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleName') }})
    creation_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedUser') }})
    origin_approval_rule_template: Optional[shared_originapprovalruletemplate.OriginApprovalRuleTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originApprovalRuleTemplate') }})
    rule_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleContentSha256') }})
    
