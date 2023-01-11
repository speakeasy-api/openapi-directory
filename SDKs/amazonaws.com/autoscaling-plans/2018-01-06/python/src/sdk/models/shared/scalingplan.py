import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationsource as shared_applicationsource
from ..shared import scalinginstruction as shared_scalinginstruction
from ..shared import scalingplanstatuscode_enum as shared_scalingplanstatuscode_enum


@dataclass_json
@dataclasses.dataclass
class ScalingPlan:
    r"""ScalingPlan
    Represents a scaling plan.
    """
    
    application_source: shared_applicationsource.ApplicationSource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationSource') }})
    scaling_instructions: list[shared_scalinginstruction.ScalingInstruction] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingInstructions') }})
    scaling_plan_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingPlanName') }})
    scaling_plan_version: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingPlanVersion') }})
    status_code: shared_scalingplanstatuscode_enum.ScalingPlanStatusCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusCode') }})
    creation_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusMessage') }})
    status_start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
