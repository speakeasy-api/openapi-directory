import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clienterror as shared_clienterror


@dataclass_json
@dataclasses.dataclass
class ClientErrorResponse:
    error: Optional[shared_clienterror.ClientError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    
