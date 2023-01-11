import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpdateApprovalRuleTemplateContentInput:
    approval_rule_template_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleTemplateName') }})
    new_rule_content: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('newRuleContent') }})
    existing_rule_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('existingRuleContentSha256') }})
    
