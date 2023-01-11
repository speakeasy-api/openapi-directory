import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import medicaltranscriptionjob as shared_medicaltranscriptionjob


@dataclass_json
@dataclasses.dataclass
class StartMedicalTranscriptionJobResponse:
    medical_transcription_job: Optional[shared_medicaltranscriptionjob.MedicalTranscriptionJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MedicalTranscriptionJob') }})
    
