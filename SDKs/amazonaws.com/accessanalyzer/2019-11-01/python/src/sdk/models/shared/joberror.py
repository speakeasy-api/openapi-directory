import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import joberrorcode_enum as shared_joberrorcode_enum


@dataclass_json
@dataclasses.dataclass
class JobError:
    r"""JobError
    Contains the details about the policy generation error.
    """
    
    code: shared_joberrorcode_enum.JobErrorCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
