import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transcriptionjobstatus_enum as shared_transcriptionjobstatus_enum
from ..shared import transcriptionjobsummary as shared_transcriptionjobsummary


@dataclass_json
@dataclasses.dataclass
class ListTranscriptionJobsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    status: Optional[shared_transcriptionjobstatus_enum.TranscriptionJobStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    transcription_job_summaries: Optional[list[shared_transcriptionjobsummary.TranscriptionJobSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranscriptionJobSummaries') }})
    
