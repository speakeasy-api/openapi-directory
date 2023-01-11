import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import medicaltranscriptionjobsummary as shared_medicaltranscriptionjobsummary
from ..shared import transcriptionjobstatus_enum as shared_transcriptionjobstatus_enum


@dataclass_json
@dataclasses.dataclass
class ListMedicalTranscriptionJobsResponse:
    medical_transcription_job_summaries: Optional[list[shared_medicaltranscriptionjobsummary.MedicalTranscriptionJobSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MedicalTranscriptionJobSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    status: Optional[shared_transcriptionjobstatus_enum.TranscriptionJobStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
