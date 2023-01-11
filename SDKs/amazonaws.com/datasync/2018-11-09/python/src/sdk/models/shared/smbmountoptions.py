import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import smbversion_enum as shared_smbversion_enum


@dataclass_json
@dataclasses.dataclass
class SmbMountOptions:
    r"""SmbMountOptions
    Represents the mount options that are available for DataSync to access an SMB location.
    """
    
    version: Optional[shared_smbversion_enum.SmbVersionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
