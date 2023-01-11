import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import credentials as shared_credentials


@dataclass_json
@dataclasses.dataclass
class GetProgrammaticAccessCredentialsResponse:
    credentials: Optional[shared_credentials.Credentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    duration_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationInMinutes') }})
    
