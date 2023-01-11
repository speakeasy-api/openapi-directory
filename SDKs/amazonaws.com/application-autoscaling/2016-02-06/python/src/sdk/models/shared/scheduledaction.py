import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scalabledimension_enum as shared_scalabledimension_enum
from ..shared import scalabletargetaction as shared_scalabletargetaction
from ..shared import servicenamespace_enum as shared_servicenamespace_enum


@dataclass_json
@dataclasses.dataclass
class ScheduledAction:
    r"""ScheduledAction
    Represents a scheduled action.
    """
    
    creation_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    schedule: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    scheduled_action_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduledActionARN') }})
    scheduled_action_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduledActionName') }})
    service_namespace: shared_servicenamespace_enum.ServiceNamespaceEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNamespace') }})
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    scalable_dimension: Optional[shared_scalabledimension_enum.ScalableDimensionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalableDimension') }})
    scalable_target_action: Optional[shared_scalabletargetaction.ScalableTargetAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalableTargetAction') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timezone') }})
    
