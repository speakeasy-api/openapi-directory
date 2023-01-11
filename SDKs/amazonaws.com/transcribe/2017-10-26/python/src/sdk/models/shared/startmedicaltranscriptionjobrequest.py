import dataclasses
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
from ..shared import type_enum as shared_type_enum


@dataclass_json
@dataclasses.dataclass
class StartMedicalTranscriptionJobRequest:
    language_code: shared_languagecode_enum.LanguageCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    media: shared_media.Media = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Media') }})
    medical_transcription_job_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MedicalTranscriptionJobName') }})
    output_bucket_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputBucketName') }})
    specialty: shared_specialty_enum.SpecialtyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Specialty') }})
    type: shared_type_enum.TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    content_identification_type: Optional[shared_medicalcontentidentificationtype_enum.MedicalContentIdentificationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentIdentificationType') }})
    kms_encryption_context: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KMSEncryptionContext') }})
    media_format: Optional[shared_mediaformat_enum.MediaFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaFormat') }})
    media_sample_rate_hertz: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaSampleRateHertz') }})
    output_encryption_kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputEncryptionKMSKeyId') }})
    output_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputKey') }})
    settings: Optional[shared_medicaltranscriptionsetting.MedicalTranscriptionSetting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Settings') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
