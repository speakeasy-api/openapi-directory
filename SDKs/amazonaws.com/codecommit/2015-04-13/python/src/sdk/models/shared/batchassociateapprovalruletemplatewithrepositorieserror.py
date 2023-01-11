import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BatchAssociateApprovalRuleTemplateWithRepositoriesError:
    r"""BatchAssociateApprovalRuleTemplateWithRepositoriesError
    Returns information about errors in a BatchAssociateApprovalRuleTemplateWithRepositories operation.
    """
    
    error_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    repository_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    
