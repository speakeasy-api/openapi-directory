import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationsource as shared_applicationsource
from ..shared import scalinginstruction as shared_scalinginstruction


@dataclass_json
@dataclasses.dataclass
class CreateScalingPlanRequest:
    application_source: shared_applicationsource.ApplicationSource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationSource') }})
    scaling_instructions: list[shared_scalinginstruction.ScalingInstruction] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingInstructions') }})
    scaling_plan_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingPlanName') }})
    
