import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetResetFpgaImageAttributeActionEnum(str, Enum):
    RESET_FPGA_IMAGE_ATTRIBUTE = "ResetFpgaImageAttribute"

class GetResetFpgaImageAttributeAttributeEnum(str, Enum):
    LOAD_PERMISSION = "loadPermission"

class GetResetFpgaImageAttributeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclasses.dataclass
class GetResetFpgaImageAttributeQueryParams:
    action: GetResetFpgaImageAttributeActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    fpga_image_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'FpgaImageId', 'style': 'form', 'explode': True }})
    version: GetResetFpgaImageAttributeVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    attribute: Optional[GetResetFpgaImageAttributeAttributeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Attribute', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetResetFpgaImageAttributeHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResetFpgaImageAttributeRequest:
    headers: GetResetFpgaImageAttributeHeaders = dataclasses.field()
    query_params: GetResetFpgaImageAttributeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResetFpgaImageAttributeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
