import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notificationchannel as shared_notificationchannel
from ..shared import video as shared_video


@dataclass_json
@dataclasses.dataclass
class StartFaceSearchRequest:
    collection_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CollectionId') }})
    video: shared_video.Video = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Video') }})
    client_request_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    face_match_threshold: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceMatchThreshold') }})
    job_tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobTag') }})
    notification_channel: Optional[shared_notificationchannel.NotificationChannel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationChannel') }})
    
