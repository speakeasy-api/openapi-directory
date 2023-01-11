import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import functionexecutionconfig as shared_functionexecutionconfig
from ..shared import resourceaccesspolicy as shared_resourceaccesspolicy


@dataclass_json
@dataclasses.dataclass
class FunctionConfigurationEnvironment:
    r"""FunctionConfigurationEnvironment
    The environment configuration of the function.
    """
    
    access_sysfs: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessSysfs') }})
    execution: Optional[shared_functionexecutionconfig.FunctionExecutionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Execution') }})
    resource_access_policies: Optional[list[shared_resourceaccesspolicy.ResourceAccessPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAccessPolicies') }})
    variables: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Variables') }})
    
