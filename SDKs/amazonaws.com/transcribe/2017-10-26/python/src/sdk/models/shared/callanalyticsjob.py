import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import callanalyticsjobstatus_enum as shared_callanalyticsjobstatus_enum
from ..shared import channeldefinition as shared_channeldefinition
from ..shared import languagecode_enum as shared_languagecode_enum
from ..shared import media as shared_media
from ..shared import mediaformat_enum as shared_mediaformat_enum
from ..shared import callanalyticsjobsettings as shared_callanalyticsjobsettings
from ..shared import transcript as shared_transcript


@dataclass_json
@dataclasses.dataclass
class CallAnalyticsJob:
    r"""CallAnalyticsJob
    Describes an asynchronous analytics job that was created with the <code>StartAnalyticsJob</code> operation.
    """
    
    call_analytics_job_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CallAnalyticsJobName') }})
    call_analytics_job_status: Optional[shared_callanalyticsjobstatus_enum.CallAnalyticsJobStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CallAnalyticsJobStatus') }})
    channel_definitions: Optional[list[shared_channeldefinition.ChannelDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelDefinitions') }})
    completion_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompletionTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creation_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_access_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataAccessRoleArn') }})
    failure_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    identified_language_score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentifiedLanguageScore') }})
    language_code: Optional[shared_languagecode_enum.LanguageCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    media: Optional[shared_media.Media] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Media') }})
    media_format: Optional[shared_mediaformat_enum.MediaFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaFormat') }})
    media_sample_rate_hertz: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaSampleRateHertz') }})
    settings: Optional[shared_callanalyticsjobsettings.CallAnalyticsJobSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Settings') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transcript: Optional[shared_transcript.Transcript] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Transcript') }})
    
