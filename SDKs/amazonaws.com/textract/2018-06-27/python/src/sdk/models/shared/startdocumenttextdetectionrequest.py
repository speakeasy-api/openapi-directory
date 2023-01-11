import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import documentlocation as shared_documentlocation
from ..shared import notificationchannel as shared_notificationchannel
from ..shared import outputconfig as shared_outputconfig


@dataclass_json
@dataclasses.dataclass
class StartDocumentTextDetectionRequest:
    document_location: shared_documentlocation.DocumentLocation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentLocation') }})
    client_request_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    job_tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobTag') }})
    kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KMSKeyId') }})
    notification_channel: Optional[shared_notificationchannel.NotificationChannel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationChannel') }})
    output_config: Optional[shared_outputconfig.OutputConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputConfig') }})
    
