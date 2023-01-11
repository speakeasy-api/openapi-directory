import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import responseformat_enum as shared_responseformat_enum
from ..shared import push as shared_push
from ..shared import recipient as shared_recipient
from ..shared import error as shared_error


@dataclasses.dataclass
class PublishPushNotificationToDevicesQueryParams:
    format: Optional[shared_responseformat_enum.ResponseFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PublishPushNotificationToDevicesHeaders:
    x_ably_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Ably-Version', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PublishPushNotificationToDevicesApplicationJSON:
    recipient: shared_recipient.Recipient = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient') }})
    push: Optional[shared_push.Push] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('push') }})
    

@dataclasses.dataclass
class PublishPushNotificationToDevicesApplicationXWwwFormUrlencoded:
    recipient: shared_recipient.Recipient = dataclasses.field(metadata={'form': { 'field_name': 'recipient' }})
    push: Optional[shared_push.Push] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'push' }})
    

@dataclasses.dataclass
class PublishPushNotificationToDevicesRequests:
    application_x_msgpack: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/x-msgpack' }})
    object: Optional[PublishPushNotificationToDevicesApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[PublishPushNotificationToDevicesApplicationXWwwFormUrlencoded] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class PublishPushNotificationToDevicesRequest:
    headers: PublishPushNotificationToDevicesHeaders = dataclasses.field()
    query_params: PublishPushNotificationToDevicesQueryParams = dataclasses.field()
    request: Optional[PublishPushNotificationToDevicesRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PublishPushNotificationToDevicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
