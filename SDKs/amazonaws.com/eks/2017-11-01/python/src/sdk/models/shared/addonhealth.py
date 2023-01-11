import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addonissue as shared_addonissue


@dataclass_json
@dataclasses.dataclass
class AddonHealth:
    r"""AddonHealth
    The health of the add-on.
    """
    
    issues: Optional[list[shared_addonissue.AddonIssue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues') }})
    
