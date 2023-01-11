import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import responsespecification as shared_responsespecification
from ..shared import promptspecification as shared_promptspecification


@dataclass_json
@dataclasses.dataclass
class IntentConfirmationSetting:
    r"""IntentConfirmationSetting
    Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
    """
    
    declination_response: shared_responsespecification.ResponseSpecification = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('declinationResponse') }})
    prompt_specification: shared_promptspecification.PromptSpecification = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('promptSpecification') }})
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    
