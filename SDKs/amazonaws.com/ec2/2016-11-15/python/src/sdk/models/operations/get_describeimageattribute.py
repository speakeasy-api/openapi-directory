import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDescribeImageAttributeActionEnum(str, Enum):
    DESCRIBE_IMAGE_ATTRIBUTE = "DescribeImageAttribute"

class GetDescribeImageAttributeAttributeEnum(str, Enum):
    DESCRIPTION = "description"
    KERNEL = "kernel"
    RAMDISK = "ramdisk"
    LAUNCH_PERMISSION = "launchPermission"
    PRODUCT_CODES = "productCodes"
    BLOCK_DEVICE_MAPPING = "blockDeviceMapping"
    SRIOV_NET_SUPPORT = "sriovNetSupport"
    BOOT_MODE = "bootMode"

class GetDescribeImageAttributeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclasses.dataclass
class GetDescribeImageAttributeQueryParams:
    action: GetDescribeImageAttributeActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    attribute: GetDescribeImageAttributeAttributeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Attribute', 'style': 'form', 'explode': True }})
    image_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ImageId', 'style': 'form', 'explode': True }})
    version: GetDescribeImageAttributeVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDescribeImageAttributeHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDescribeImageAttributeRequest:
    headers: GetDescribeImageAttributeHeaders = dataclasses.field()
    query_params: GetDescribeImageAttributeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDescribeImageAttributeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
