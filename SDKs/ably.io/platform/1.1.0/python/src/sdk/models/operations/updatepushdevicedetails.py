import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import responseformat_enum as shared_responseformat_enum
from ..shared import devicedetails as shared_devicedetails
from ..shared import error as shared_error


@dataclasses.dataclass
class UpdatePushDeviceDetailsPathParams:
    device_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'device_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePushDeviceDetailsQueryParams:
    format: Optional[shared_responseformat_enum.ResponseFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UpdatePushDeviceDetailsHeaders:
    x_ably_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Ably-Version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePushDeviceDetailsRequest:
    headers: UpdatePushDeviceDetailsHeaders = dataclasses.field()
    path_params: UpdatePushDeviceDetailsPathParams = dataclasses.field()
    query_params: UpdatePushDeviceDetailsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UpdatePushDeviceDetailsResponseOutput:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    device_details: Optional[shared_devicedetails.DeviceDetailsOutput] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
