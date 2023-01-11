import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import policyversion as shared_policyversion


@dataclass_json
@dataclasses.dataclass
class ListPolicyVersionsResponse:
    r"""ListPolicyVersionsResponse
    The output from the ListPolicyVersions operation.
    """
    
    policy_versions: Optional[list[shared_policyversion.PolicyVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyVersions') }})
    
