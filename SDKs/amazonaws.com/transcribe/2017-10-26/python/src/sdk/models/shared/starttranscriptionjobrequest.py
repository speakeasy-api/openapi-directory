import dataclasses
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
from ..shared import subtitles as shared_subtitles
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class StartTranscriptionJobRequest:
    media: shared_media.Media = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Media') }})
    transcription_job_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranscriptionJobName') }})
    content_redaction: Optional[shared_contentredaction.ContentRedaction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentRedaction') }})
    identify_language: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentifyLanguage') }})
    job_execution_settings: Optional[shared_jobexecutionsettings.JobExecutionSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobExecutionSettings') }})
    kms_encryption_context: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KMSEncryptionContext') }})
    language_code: Optional[shared_languagecode_enum.LanguageCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    language_options: Optional[list[shared_languagecode_enum.LanguageCodeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageOptions') }})
    media_format: Optional[shared_mediaformat_enum.MediaFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaFormat') }})
    media_sample_rate_hertz: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaSampleRateHertz') }})
    model_settings: Optional[shared_modelsettings.ModelSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelSettings') }})
    output_bucket_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputBucketName') }})
    output_encryption_kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputEncryptionKMSKeyId') }})
    output_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputKey') }})
    settings: Optional[shared_settings.Settings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Settings') }})
    subtitles: Optional[shared_subtitles.Subtitles] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subtitles') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
