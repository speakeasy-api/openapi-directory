import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import stacksetoperationtype_enum as shared_stacksetoperationtype_enum


@dataclass_json
@dataclasses.dataclass
class UpdateProvisioningPreferences:
    r"""UpdateProvisioningPreferences
    The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types.
    """
    
    stack_set_accounts: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackSetAccounts') }})
    stack_set_failure_tolerance_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackSetFailureToleranceCount') }})
    stack_set_failure_tolerance_percentage: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackSetFailureTolerancePercentage') }})
    stack_set_max_concurrency_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackSetMaxConcurrencyCount') }})
    stack_set_max_concurrency_percentage: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackSetMaxConcurrencyPercentage') }})
    stack_set_operation_type: Optional[shared_stacksetoperationtype_enum.StackSetOperationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackSetOperationType') }})
    stack_set_regions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackSetRegions') }})
    
