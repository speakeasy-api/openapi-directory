import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ssmoutput as shared_ssmoutput


@dataclass_json
@dataclasses.dataclass
class AppValidationOutput:
    r"""AppValidationOutput
    Output from validating an application.
    """
    
    ssm_output: Optional[shared_ssmoutput.SsmOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssmOutput') }})
    
