import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import approvalruletemplate as shared_approvalruletemplate


@dataclass_json
@dataclasses.dataclass
class CreateApprovalRuleTemplateOutput:
    approval_rule_template: shared_approvalruletemplate.ApprovalRuleTemplate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleTemplate') }})
    
