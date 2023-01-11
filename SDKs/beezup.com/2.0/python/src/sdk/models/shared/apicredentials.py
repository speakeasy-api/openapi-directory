import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apicredential as shared_apicredential


@dataclass_json
@dataclasses.dataclass
class APICredentials:
    credentials: Optional[list[shared_apicredential.APICredential]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    
