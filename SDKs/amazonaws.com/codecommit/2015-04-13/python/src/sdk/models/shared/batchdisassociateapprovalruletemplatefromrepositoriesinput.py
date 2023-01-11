import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BatchDisassociateApprovalRuleTemplateFromRepositoriesInput:
    approval_rule_template_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleTemplateName') }})
    repository_names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryNames') }})
    
