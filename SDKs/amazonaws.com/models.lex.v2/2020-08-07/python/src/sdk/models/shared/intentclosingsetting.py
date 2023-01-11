import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import responsespecification as shared_responsespecification


@dataclass_json
@dataclasses.dataclass
class IntentClosingSetting:
    r"""IntentClosingSetting
    Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
    """
    
    closing_response: shared_responsespecification.ResponseSpecification = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('closingResponse') }})
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    
