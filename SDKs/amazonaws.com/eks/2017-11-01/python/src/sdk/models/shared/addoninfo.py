import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addonversioninfo as shared_addonversioninfo


@dataclass_json
@dataclasses.dataclass
class AddonInfo:
    r"""AddonInfo
    Information about an add-on.
    """
    
    addon_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addonName') }})
    addon_versions: Optional[list[shared_addonversioninfo.AddonVersionInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addonVersions') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
