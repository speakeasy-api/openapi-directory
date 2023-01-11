import dataclasses
from typing import Optional
from enum import Enum
from ..shared import responseformat_enum as shared_responseformat_enum
from ..shared import error as shared_error


@dataclasses.dataclass
class UnregisterPushDevicePathParams:
    device_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'device_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UnregisterPushDeviceQueryParams:
    format: Optional[shared_responseformat_enum.ResponseFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UnregisterPushDeviceHeaders:
    x_ably_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Ably-Version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UnregisterPushDeviceRequest:
    headers: UnregisterPushDeviceHeaders = dataclasses.field()
    path_params: UnregisterPushDevicePathParams = dataclasses.field()
    query_params: UnregisterPushDeviceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UnregisterPushDeviceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
