import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notification as shared_notification


@dataclass_json
@dataclasses.dataclass
class PushApns:
    r"""PushApns
    Extends and overrides generic values when delivering via APNs. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
    """
    
    notification: Optional[shared_notification.Notification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }, 'form': { 'field_name': 'notification' }})
    

@dataclass_json
@dataclasses.dataclass
class PushFcm:
    r"""PushFcm
    Extends and overrides generic values when delivering via GCM/FCM. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
    """
    
    notification: Optional[shared_notification.Notification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }, 'form': { 'field_name': 'notification' }})
    

@dataclass_json
@dataclasses.dataclass
class PushWeb:
    r"""PushWeb
    Extends and overrides generic values when delivering via web. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
    """
    
    notification: Optional[shared_notification.Notification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }, 'form': { 'field_name': 'notification' }})
    

@dataclass_json
@dataclasses.dataclass
class Push:
    apns: Optional[PushApns] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apns') }, 'form': { 'field_name': 'apns' }})
    data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }, 'form': { 'field_name': 'data' }})
    fcm: Optional[PushFcm] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fcm') }, 'form': { 'field_name': 'fcm' }})
    notification: Optional[shared_notification.Notification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }, 'form': { 'field_name': 'notification' }})
    web: Optional[PushWeb] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('web') }, 'form': { 'field_name': 'web' }})
    
