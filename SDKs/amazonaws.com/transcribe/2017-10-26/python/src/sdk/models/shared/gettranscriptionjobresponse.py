import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transcriptionjob as shared_transcriptionjob


@dataclass_json
@dataclasses.dataclass
class GetTranscriptionJobResponse:
    transcription_job: Optional[shared_transcriptionjob.TranscriptionJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranscriptionJob') }})
    
