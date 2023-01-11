import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetModifyVolumeActionEnum(str, Enum):
    MODIFY_VOLUME = "ModifyVolume"

class GetModifyVolumeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"

class GetModifyVolumeVolumeTypeEnum(str, Enum):
    STANDARD = "standard"
    IO1 = "io1"
    IO2 = "io2"
    GP2 = "gp2"
    SC1 = "sc1"
    ST1 = "st1"
    GP3 = "gp3"


@dataclasses.dataclass
class GetModifyVolumeQueryParams:
    action: GetModifyVolumeActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetModifyVolumeVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    volume_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'VolumeId', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    iops: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Iops', 'style': 'form', 'explode': True }})
    multi_attach_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MultiAttachEnabled', 'style': 'form', 'explode': True }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Size', 'style': 'form', 'explode': True }})
    throughput: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Throughput', 'style': 'form', 'explode': True }})
    volume_type: Optional[GetModifyVolumeVolumeTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'VolumeType', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetModifyVolumeHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetModifyVolumeRequest:
    headers: GetModifyVolumeHeaders = dataclasses.field()
    query_params: GetModifyVolumeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetModifyVolumeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
