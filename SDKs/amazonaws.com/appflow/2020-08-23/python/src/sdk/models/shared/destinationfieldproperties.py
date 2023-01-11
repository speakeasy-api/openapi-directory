import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import writeoperationtype_enum as shared_writeoperationtype_enum


@dataclass_json
@dataclasses.dataclass
class DestinationFieldProperties:
    r"""DestinationFieldProperties
     The properties that can be applied to a field when connector is being used as a destination. 
    """
    
    is_creatable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isCreatable') }})
    is_nullable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isNullable') }})
    is_updatable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isUpdatable') }})
    is_upsertable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isUpsertable') }})
    supported_write_operations: Optional[list[shared_writeoperationtype_enum.WriteOperationTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedWriteOperations') }})
    
