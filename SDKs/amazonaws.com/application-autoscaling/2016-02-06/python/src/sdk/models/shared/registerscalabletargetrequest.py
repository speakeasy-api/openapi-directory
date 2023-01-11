import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scalabledimension_enum as shared_scalabledimension_enum
from ..shared import servicenamespace_enum as shared_servicenamespace_enum
from ..shared import suspendedstate as shared_suspendedstate


@dataclass_json
@dataclasses.dataclass
class RegisterScalableTargetRequest:
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    scalable_dimension: shared_scalabledimension_enum.ScalableDimensionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalableDimension') }})
    service_namespace: shared_servicenamespace_enum.ServiceNamespaceEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNamespace') }})
    max_capacity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxCapacity') }})
    min_capacity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinCapacity') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    suspended_state: Optional[shared_suspendedstate.SuspendedState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuspendedState') }})
    
