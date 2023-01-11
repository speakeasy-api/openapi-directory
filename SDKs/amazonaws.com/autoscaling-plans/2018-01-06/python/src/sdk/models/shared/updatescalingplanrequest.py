import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationsource as shared_applicationsource
from ..shared import scalinginstruction as shared_scalinginstruction


@dataclass_json
@dataclasses.dataclass
class UpdateScalingPlanRequest:
    scaling_plan_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingPlanName') }})
    scaling_plan_version: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingPlanVersion') }})
    application_source: Optional[shared_applicationsource.ApplicationSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationSource') }})
    scaling_instructions: Optional[list[shared_scalinginstruction.ScalingInstruction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingInstructions') }})
    
