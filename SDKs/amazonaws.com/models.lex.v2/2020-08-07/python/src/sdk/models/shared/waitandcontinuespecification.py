import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import responsespecification as shared_responsespecification
from ..shared import stillwaitingresponsespecification as shared_stillwaitingresponsespecification


@dataclass_json
@dataclasses.dataclass
class WaitAndContinueSpecification:
    r"""WaitAndContinueSpecification
    Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input. 
    """
    
    continue_response: shared_responsespecification.ResponseSpecification = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('continueResponse') }})
    waiting_response: shared_responsespecification.ResponseSpecification = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('waitingResponse') }})
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    still_waiting_response: Optional[shared_stillwaitingresponsespecification.StillWaitingResponseSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stillWaitingResponse') }})
    
