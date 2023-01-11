import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import redactionoutput_enum as shared_redactionoutput_enum
from ..shared import redactiontype_enum as shared_redactiontype_enum


@dataclass_json
@dataclasses.dataclass
class ContentRedaction:
    r"""ContentRedaction
    Settings for content redaction within a transcription job.
    """
    
    redaction_output: shared_redactionoutput_enum.RedactionOutputEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedactionOutput') }})
    redaction_type: shared_redactiontype_enum.RedactionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedactionType') }})
    
