import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import preset as shared_preset


@dataclass_json
@dataclasses.dataclass
class ListPresetsResponse:
    r"""ListPresetsResponse
    The <code>ListPresetsResponse</code> structure.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    presets: Optional[list[shared_preset.Preset]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Presets') }})
    
