import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import temporarycredential as shared_temporarycredential


@dataclass_json
@dataclasses.dataclass
class GrantAccessResult:
    r"""GrantAccessResult
    Contains the response to a <code>GrantAccess</code> request.
    """
    
    temporary_credential: Optional[shared_temporarycredential.TemporaryCredential] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemporaryCredential') }})
    
