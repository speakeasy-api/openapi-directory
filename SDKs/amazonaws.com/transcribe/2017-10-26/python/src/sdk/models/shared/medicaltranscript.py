import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MedicalTranscript:
    r"""MedicalTranscript
    Identifies the location of a medical transcript.
    """
    
    transcript_file_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranscriptFileUri') }})
    
