import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchdisassociateapprovalruletemplatefromrepositorieserror as shared_batchdisassociateapprovalruletemplatefromrepositorieserror


@dataclass_json
@dataclasses.dataclass
class BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput:
    disassociated_repository_names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disassociatedRepositoryNames') }})
    errors: list[shared_batchdisassociateapprovalruletemplatefromrepositorieserror.BatchDisassociateApprovalRuleTemplateFromRepositoriesError] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
