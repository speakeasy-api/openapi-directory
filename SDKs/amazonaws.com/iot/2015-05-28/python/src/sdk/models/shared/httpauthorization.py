import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sigv4authorization as shared_sigv4authorization


@dataclass_json
@dataclasses.dataclass
class HTTPAuthorization:
    r"""HTTPAuthorization
    The authorization method used to send messages.
    """
    
    sigv4: Optional[shared_sigv4authorization.SigV4Authorization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sigv4') }})
    
