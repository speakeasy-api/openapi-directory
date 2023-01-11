import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import detailederrorcode_enum as shared_detailederrorcode_enum


@dataclass_json
@dataclasses.dataclass
class DetailedError:
    r"""DetailedError
    Contains detailed error information. 
    """
    
    code: shared_detailederrorcode_enum.DetailedErrorCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
