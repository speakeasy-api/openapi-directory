import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import responseformat_enum as shared_responseformat_enum
from ..shared import error as shared_error


@dataclasses.dataclass
class SubscribePushDeviceToChannelQueryParams:
    format: Optional[shared_responseformat_enum.ResponseFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SubscribePushDeviceToChannelHeaders:
    x_ably_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Ably-Version', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class SubscribePushDeviceToChannelApplicationJSON1:
    channel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    device_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceId') }})
    

@dataclass_json
@dataclasses.dataclass
class SubscribePushDeviceToChannelApplicationJSON2:
    channel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    

@dataclasses.dataclass
class SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded1:
    channel: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'channel' }})
    device_id: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'deviceId' }})
    

@dataclasses.dataclass
class SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded2:
    channel: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'channel' }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'clientId' }})
    

@dataclasses.dataclass
class SubscribePushDeviceToChannelRequests:
    application_x_msgpack: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/x-msgpack' }})
    one_of: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    one_of1: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class SubscribePushDeviceToChannelRequest:
    headers: SubscribePushDeviceToChannelHeaders = dataclasses.field()
    query_params: SubscribePushDeviceToChannelQueryParams = dataclasses.field()
    request: Optional[SubscribePushDeviceToChannelRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class SubscribePushDeviceToChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
