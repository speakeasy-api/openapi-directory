import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import slotdefaultvaluespecification as shared_slotdefaultvaluespecification
from ..shared import promptspecification as shared_promptspecification
from ..shared import sampleutterance as shared_sampleutterance
from ..shared import slotconstraint_enum as shared_slotconstraint_enum
from ..shared import waitandcontinuespecification as shared_waitandcontinuespecification


@dataclass_json
@dataclasses.dataclass
class SlotValueElicitationSetting:
    r"""SlotValueElicitationSetting
    Settings that you can use for eliciting a slot value.
    """
    
    slot_constraint: shared_slotconstraint_enum.SlotConstraintEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotConstraint') }})
    default_value_specification: Optional[shared_slotdefaultvaluespecification.SlotDefaultValueSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValueSpecification') }})
    prompt_specification: Optional[shared_promptspecification.PromptSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promptSpecification') }})
    sample_utterances: Optional[list[shared_sampleutterance.SampleUtterance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleUtterances') }})
    wait_and_continue_specification: Optional[shared_waitandcontinuespecification.WaitAndContinueSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waitAndContinueSpecification') }})
    
