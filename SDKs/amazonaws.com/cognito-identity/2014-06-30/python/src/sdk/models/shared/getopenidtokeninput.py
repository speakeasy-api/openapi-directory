import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetOpenIDTokenInput:
    r"""GetOpenIDTokenInput
    Input to the GetOpenIdToken action.
    """
    
    identity_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityId') }})
    logins: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Logins') }})
    
