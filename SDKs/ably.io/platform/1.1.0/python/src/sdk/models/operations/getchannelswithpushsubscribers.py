import dataclasses
from typing import Optional
from enum import Enum
from ..shared import responseformat_enum as shared_responseformat_enum
from ..shared import error as shared_error


@dataclasses.dataclass
class GetChannelsWithPushSubscribersQueryParams:
    format: Optional[shared_responseformat_enum.ResponseFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetChannelsWithPushSubscribersHeaders:
    x_ably_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Ably-Version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChannelsWithPushSubscribersRequest:
    headers: GetChannelsWithPushSubscribersHeaders = dataclasses.field()
    query_params: GetChannelsWithPushSubscribersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChannelsWithPushSubscribersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    get_channels_with_push_subscribers_2_xx_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
