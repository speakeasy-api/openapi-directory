import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DefaultMessage:
    r"""DefaultMessage
    Specifies the default message for all channels.
    """
    
    body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Body') }})
    substitutions: Optional[dict[str, list[str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Substitutions') }})
    
