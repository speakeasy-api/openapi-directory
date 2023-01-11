import dataclasses
from typing import Optional
from enum import Enum
from ..shared import responseformat_enum as shared_responseformat_enum
from ..shared import devicedetails as shared_devicedetails
from ..shared import devicedetails as shared_devicedetails
from ..shared import error as shared_error


@dataclasses.dataclass
class RegisterPushDeviceQueryParams:
    format: Optional[shared_responseformat_enum.ResponseFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RegisterPushDeviceHeaders:
    x_ably_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Ably-Version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegisterPushDeviceRequestsInput:
    application_x_msgpack: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/x-msgpack' }})
    device_details: Optional[shared_devicedetails.DeviceDetailsInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RegisterPushDeviceRequest:
    headers: RegisterPushDeviceHeaders = dataclasses.field()
    query_params: RegisterPushDeviceQueryParams = dataclasses.field()
    request: Optional[RegisterPushDeviceRequestsInput] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class RegisterPushDeviceResponseOutput:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    device_details: Optional[shared_devicedetails.DeviceDetailsOutput] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
