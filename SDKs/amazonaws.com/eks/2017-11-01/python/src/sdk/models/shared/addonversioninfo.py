import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compatibility as shared_compatibility


@dataclass_json
@dataclasses.dataclass
class AddonVersionInfo:
    r"""AddonVersionInfo
    Information about an add-on version.
    """
    
    addon_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addonVersion') }})
    architecture: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('architecture') }})
    compatibilities: Optional[list[shared_compatibility.Compatibility]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibilities') }})
    
