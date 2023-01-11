import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sessioncontextattributes as shared_sessioncontextattributes
from ..shared import sessionissuer as shared_sessionissuer


@dataclass_json
@dataclasses.dataclass
class SessionContext:
    r"""SessionContext
    Provides information about a session that was created for an entity that performed an action by using temporary security credentials.
    """
    
    attributes: Optional[shared_sessioncontextattributes.SessionContextAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    session_issuer: Optional[shared_sessionissuer.SessionIssuer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionIssuer') }})
    
