import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import session as shared_session


@dataclass_json
@dataclasses.dataclass
class SessionList:
    r"""SessionList
    Sessions List
    """
    
    sessions: list[shared_session.Session] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessions') }})
    sum: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    
