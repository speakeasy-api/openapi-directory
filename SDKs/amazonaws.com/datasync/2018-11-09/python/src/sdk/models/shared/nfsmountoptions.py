import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nfsversion_enum as shared_nfsversion_enum


@dataclass_json
@dataclasses.dataclass
class NfsMountOptions:
    r"""NfsMountOptions
    Represents the mount options that are available for DataSync to access an NFS location.
    """
    
    version: Optional[shared_nfsversion_enum.NfsVersionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
