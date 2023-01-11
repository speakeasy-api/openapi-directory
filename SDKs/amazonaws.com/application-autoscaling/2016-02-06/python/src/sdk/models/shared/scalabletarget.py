import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scalabledimension_enum as shared_scalabledimension_enum
from ..shared import servicenamespace_enum as shared_servicenamespace_enum
from ..shared import suspendedstate as shared_suspendedstate


@dataclass_json
@dataclasses.dataclass
class ScalableTarget:
    r"""ScalableTarget
    Represents a scalable target.
    """
    
    creation_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    max_capacity: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxCapacity') }})
    min_capacity: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinCapacity') }})
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    scalable_dimension: shared_scalabledimension_enum.ScalableDimensionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalableDimension') }})
    service_namespace: shared_servicenamespace_enum.ServiceNamespaceEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNamespace') }})
    suspended_state: Optional[shared_suspendedstate.SuspendedState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuspendedState') }})
    
