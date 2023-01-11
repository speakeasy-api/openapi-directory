import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchassociateapprovalruletemplatewithrepositorieserror as shared_batchassociateapprovalruletemplatewithrepositorieserror


@dataclass_json
@dataclasses.dataclass
class BatchAssociateApprovalRuleTemplateWithRepositoriesOutput:
    associated_repository_names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatedRepositoryNames') }})
    errors: list[shared_batchassociateapprovalruletemplatewithrepositorieserror.BatchAssociateApprovalRuleTemplateWithRepositoriesError] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
