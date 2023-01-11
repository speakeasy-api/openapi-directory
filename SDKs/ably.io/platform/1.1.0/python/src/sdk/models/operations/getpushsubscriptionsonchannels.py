import dataclasses
from typing import Optional
from enum import Enum
from ..shared import responseformat_enum as shared_responseformat_enum
from ..shared import devicedetails as shared_devicedetails
from ..shared import error as shared_error


@dataclasses.dataclass
class GetPushSubscriptionsOnChannelsQueryParams:
    channel: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'channel', 'style': 'form', 'explode': True }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clientId', 'style': 'form', 'explode': True }})
    device_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    format: Optional[shared_responseformat_enum.ResponseFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPushSubscriptionsOnChannelsHeaders:
    x_ably_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Ably-Version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPushSubscriptionsOnChannelsRequest:
    headers: GetPushSubscriptionsOnChannelsHeaders = dataclasses.field()
    query_params: GetPushSubscriptionsOnChannelsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPushSubscriptionsOnChannelsResponseOutput:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    device_details: Optional[shared_devicedetails.DeviceDetailsOutput] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
