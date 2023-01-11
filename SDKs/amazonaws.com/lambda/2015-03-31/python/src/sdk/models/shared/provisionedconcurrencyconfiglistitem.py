import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provisionedconcurrencystatusenum_enum as shared_provisionedconcurrencystatusenum_enum


@dataclass_json
@dataclasses.dataclass
class ProvisionedConcurrencyConfigListItem:
    r"""ProvisionedConcurrencyConfigListItem
    Details about the provisioned concurrency configuration for a function alias or version.
    """
    
    allocated_provisioned_concurrent_executions: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllocatedProvisionedConcurrentExecutions') }})
    available_provisioned_concurrent_executions: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailableProvisionedConcurrentExecutions') }})
    function_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionArn') }})
    last_modified: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModified') }})
    requested_provisioned_concurrent_executions: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestedProvisionedConcurrentExecutions') }})
    status: Optional[shared_provisionedconcurrencystatusenum_enum.ProvisionedConcurrencyStatusEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusReason') }})
    
