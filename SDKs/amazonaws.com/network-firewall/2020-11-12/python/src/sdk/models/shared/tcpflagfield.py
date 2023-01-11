import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tcpflag_enum as shared_tcpflag_enum


@dataclass_json
@dataclasses.dataclass
class TCPFlagField:
    r"""TCPFlagField
    TCP flags and masks to inspect packets for, used in stateless rules <a>MatchAttributes</a> settings.
    """
    
    flags: list[shared_tcpflag_enum.TCPFlagEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Flags') }})
    masks: Optional[list[shared_tcpflag_enum.TCPFlagEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Masks') }})
    
