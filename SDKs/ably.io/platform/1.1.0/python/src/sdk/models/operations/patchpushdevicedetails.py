import dataclasses
from typing import Optional
from enum import Enum
from ..shared import responseformat_enum as shared_responseformat_enum
from ..shared import devicedetails as shared_devicedetails
from ..shared import devicedetails as shared_devicedetails
from ..shared import error as shared_error


@dataclasses.dataclass
class PatchPushDeviceDetailsPathParams:
    device_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'device_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchPushDeviceDetailsQueryParams:
    format: Optional[shared_responseformat_enum.ResponseFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatchPushDeviceDetailsHeaders:
    x_ably_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Ably-Version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchPushDeviceDetailsRequestsInput:
    application_x_msgpack: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/x-msgpack' }})
    device_details: Optional[shared_devicedetails.DeviceDetailsInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    device_details1: Optional[shared_devicedetails.DeviceDetailsInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class PatchPushDeviceDetailsRequest:
    headers: PatchPushDeviceDetailsHeaders = dataclasses.field()
    path_params: PatchPushDeviceDetailsPathParams = dataclasses.field()
    query_params: PatchPushDeviceDetailsQueryParams = dataclasses.field()
    request: Optional[PatchPushDeviceDetailsRequestsInput] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PatchPushDeviceDetailsResponseOutput:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    device_details: Optional[shared_devicedetails.DeviceDetailsOutput] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
