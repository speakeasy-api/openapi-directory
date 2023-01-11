import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import preset as shared_preset


@dataclass_json
@dataclasses.dataclass
class CreatePresetResponse:
    r"""CreatePresetResponse
    The <code>CreatePresetResponse</code> structure.
    """
    
    preset: Optional[shared_preset.Preset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Preset') }})
    warning: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Warning') }})
    
