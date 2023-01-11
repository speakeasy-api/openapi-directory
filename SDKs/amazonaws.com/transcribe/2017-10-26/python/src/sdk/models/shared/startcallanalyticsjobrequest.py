import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channeldefinition as shared_channeldefinition
from ..shared import media as shared_media
from ..shared import callanalyticsjobsettings as shared_callanalyticsjobsettings


@dataclass_json
@dataclasses.dataclass
class StartCallAnalyticsJobRequest:
    call_analytics_job_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CallAnalyticsJobName') }})
    data_access_role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataAccessRoleArn') }})
    media: shared_media.Media = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Media') }})
    channel_definitions: Optional[list[shared_channeldefinition.ChannelDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelDefinitions') }})
    output_encryption_kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputEncryptionKMSKeyId') }})
    output_location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputLocation') }})
    settings: Optional[shared_callanalyticsjobsettings.CallAnalyticsJobSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Settings') }})
    
