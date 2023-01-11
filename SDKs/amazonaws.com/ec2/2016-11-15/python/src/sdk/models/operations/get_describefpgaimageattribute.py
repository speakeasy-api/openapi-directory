import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDescribeFpgaImageAttributeActionEnum(str, Enum):
    DESCRIBE_FPGA_IMAGE_ATTRIBUTE = "DescribeFpgaImageAttribute"

class GetDescribeFpgaImageAttributeAttributeEnum(str, Enum):
    DESCRIPTION = "description"
    NAME = "name"
    LOAD_PERMISSION = "loadPermission"
    PRODUCT_CODES = "productCodes"

class GetDescribeFpgaImageAttributeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclasses.dataclass
class GetDescribeFpgaImageAttributeQueryParams:
    action: GetDescribeFpgaImageAttributeActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    attribute: GetDescribeFpgaImageAttributeAttributeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Attribute', 'style': 'form', 'explode': True }})
    fpga_image_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'FpgaImageId', 'style': 'form', 'explode': True }})
    version: GetDescribeFpgaImageAttributeVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDescribeFpgaImageAttributeHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDescribeFpgaImageAttributeRequest:
    headers: GetDescribeFpgaImageAttributeHeaders = dataclasses.field()
    query_params: GetDescribeFpgaImageAttributeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDescribeFpgaImageAttributeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
