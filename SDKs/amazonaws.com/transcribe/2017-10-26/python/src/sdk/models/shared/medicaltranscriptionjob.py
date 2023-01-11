import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import medicalcontentidentificationtype_enum as shared_medicalcontentidentificationtype_enum
from ..shared import languagecode_enum as shared_languagecode_enum
from ..shared import media as shared_media
from ..shared import mediaformat_enum as shared_mediaformat_enum
from ..shared import medicaltranscriptionsetting as shared_medicaltranscriptionsetting
from ..shared import specialty_enum as shared_specialty_enum
from ..shared import tag as shared_tag
from ..shared import medicaltranscript as shared_medicaltranscript
from ..shared import transcriptionjobstatus_enum as shared_transcriptionjobstatus_enum
from ..shared import type_enum as shared_type_enum


@dataclass_json
@dataclasses.dataclass
class MedicalTranscriptionJob:
    r"""MedicalTranscriptionJob
    The data structure that contains the information for a medical transcription job.
    """
    
    completion_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompletionTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    content_identification_type: Optional[shared_medicalcontentidentificationtype_enum.MedicalContentIdentificationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentIdentificationType') }})
    creation_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    language_code: Optional[shared_languagecode_enum.LanguageCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    media: Optional[shared_media.Media] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Media') }})
    media_format: Optional[shared_mediaformat_enum.MediaFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaFormat') }})
    media_sample_rate_hertz: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaSampleRateHertz') }})
    medical_transcription_job_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MedicalTranscriptionJobName') }})
    settings: Optional[shared_medicaltranscriptionsetting.MedicalTranscriptionSetting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Settings') }})
    specialty: Optional[shared_specialty_enum.SpecialtyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Specialty') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    transcript: Optional[shared_medicaltranscript.MedicalTranscript] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Transcript') }})
    transcription_job_status: Optional[shared_transcriptionjobstatus_enum.TranscriptionJobStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranscriptionJobStatus') }})
    type: Optional[shared_type_enum.TypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
