import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ConnectionsList:
    r"""ConnectionsList
    Specifies the connections used by a job.
    """
    
    connections: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Connections') }})
    
