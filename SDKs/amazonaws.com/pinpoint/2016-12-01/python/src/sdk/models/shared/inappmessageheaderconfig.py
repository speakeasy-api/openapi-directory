import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alignment_enum as shared_alignment_enum


@dataclass_json
@dataclasses.dataclass
class InAppMessageHeaderConfig:
    r"""InAppMessageHeaderConfig
    Text config for Message Header.
    """
    
    alignment: shared_alignment_enum.AlignmentEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Alignment') }})
    header: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Header') }})
    text_color: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextColor') }})
    
