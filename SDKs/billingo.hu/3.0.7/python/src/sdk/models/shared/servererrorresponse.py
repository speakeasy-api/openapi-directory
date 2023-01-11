import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servererror as shared_servererror


@dataclass_json
@dataclasses.dataclass
class ServerErrorResponse:
    error: Optional[shared_servererror.ServerError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    
