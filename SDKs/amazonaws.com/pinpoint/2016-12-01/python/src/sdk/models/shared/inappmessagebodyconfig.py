import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alignment_enum as shared_alignment_enum


@dataclass_json
@dataclasses.dataclass
class InAppMessageBodyConfig:
    r"""InAppMessageBodyConfig
    Text config for Message Body.
    """
    
    alignment: shared_alignment_enum.AlignmentEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Alignment') }})
    body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Body') }})
    text_color: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextColor') }})
    
