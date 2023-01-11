import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payload as shared_payload


@dataclass_json
@dataclasses.dataclass
class LambdaAction:
    r"""LambdaAction
    Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
    """
    
    function_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionArn') }})
    payload: Optional[shared_payload.Payload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    
