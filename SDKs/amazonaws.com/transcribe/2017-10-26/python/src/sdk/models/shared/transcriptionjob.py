import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contentredaction as shared_contentredaction
from ..shared import jobexecutionsettings as shared_jobexecutionsettings
from ..shared import languagecode_enum as shared_languagecode_enum
from ..shared import media as shared_media
from ..shared import mediaformat_enum as shared_mediaformat_enum
from ..shared import modelsettings as shared_modelsettings
from ..shared import settings as shared_settings
from ..shared import subtitlesoutput as shared_subtitlesoutput
from ..shared import tag as shared_tag
from ..shared import transcript as shared_transcript
from ..shared import transcriptionjobstatus_enum as shared_transcriptionjobstatus_enum


@dataclass_json
@dataclasses.dataclass
class TranscriptionJob:
    r"""TranscriptionJob
    Describes an asynchronous transcription job that was created with the <code>StartTranscriptionJob</code> operation. 
    """
    
    completion_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompletionTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    content_redaction: Optional[shared_contentredaction.ContentRedaction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentRedaction') }})
    creation_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    identified_language_score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentifiedLanguageScore') }})
    identify_language: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentifyLanguage') }})
    job_execution_settings: Optional[shared_jobexecutionsettings.JobExecutionSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobExecutionSettings') }})
    language_code: Optional[shared_languagecode_enum.LanguageCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    language_options: Optional[list[shared_languagecode_enum.LanguageCodeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageOptions') }})
    media: Optional[shared_media.Media] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Media') }})
    media_format: Optional[shared_mediaformat_enum.MediaFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaFormat') }})
    media_sample_rate_hertz: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaSampleRateHertz') }})
    model_settings: Optional[shared_modelsettings.ModelSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelSettings') }})
    settings: Optional[shared_settings.Settings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Settings') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subtitles: Optional[shared_subtitlesoutput.SubtitlesOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subtitles') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    transcript: Optional[shared_transcript.Transcript] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Transcript') }})
    transcription_job_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranscriptionJobName') }})
    transcription_job_status: Optional[shared_transcriptionjobstatus_enum.TranscriptionJobStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranscriptionJobStatus') }})
    
