import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import log as shared_log


@dataclass_json
@dataclasses.dataclass
class LogList:
    r"""LogList
    Logs List
    """
    
    logs: list[shared_log.Log] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logs') }})
    
