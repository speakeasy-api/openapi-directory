import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetResetInstanceAttributeActionEnum(str, Enum):
    RESET_INSTANCE_ATTRIBUTE = "ResetInstanceAttribute"

class GetResetInstanceAttributeAttributeEnum(str, Enum):
    INSTANCE_TYPE = "instanceType"
    KERNEL = "kernel"
    RAMDISK = "ramdisk"
    USER_DATA = "userData"
    DISABLE_API_TERMINATION = "disableApiTermination"
    INSTANCE_INITIATED_SHUTDOWN_BEHAVIOR = "instanceInitiatedShutdownBehavior"
    ROOT_DEVICE_NAME = "rootDeviceName"
    BLOCK_DEVICE_MAPPING = "blockDeviceMapping"
    PRODUCT_CODES = "productCodes"
    SOURCE_DEST_CHECK = "sourceDestCheck"
    GROUP_SET = "groupSet"
    EBS_OPTIMIZED = "ebsOptimized"
    SRIOV_NET_SUPPORT = "sriovNetSupport"
    ENA_SUPPORT = "enaSupport"
    ENCLAVE_OPTIONS = "enclaveOptions"

class GetResetInstanceAttributeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclasses.dataclass
class GetResetInstanceAttributeQueryParams:
    action: GetResetInstanceAttributeActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    attribute: GetResetInstanceAttributeAttributeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Attribute', 'style': 'form', 'explode': True }})
    instance_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'InstanceId', 'style': 'form', 'explode': True }})
    version: GetResetInstanceAttributeVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetResetInstanceAttributeHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResetInstanceAttributeRequest:
    headers: GetResetInstanceAttributeHeaders = dataclasses.field()
    query_params: GetResetInstanceAttributeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResetInstanceAttributeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
