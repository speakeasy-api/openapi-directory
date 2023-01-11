import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PosixUser:
    r"""PosixUser
    The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.
    """
    
    gid: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Gid') }})
    uid: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Uid') }})
    secondary_gids: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryGids') }})
    
