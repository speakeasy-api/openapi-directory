import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCopyImageActionEnum(str, Enum):
    COPY_IMAGE = "CopyImage"

class GetCopyImageVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclasses.dataclass
class GetCopyImageQueryParams:
    action: GetCopyImageActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'Name', 'style': 'form', 'explode': True }})
    source_image_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'SourceImageId', 'style': 'form', 'explode': True }})
    source_region: str = dataclasses.field(metadata={'query_param': { 'field_name': 'SourceRegion', 'style': 'form', 'explode': True }})
    version: GetCopyImageVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ClientToken', 'style': 'form', 'explode': True }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Description', 'style': 'form', 'explode': True }})
    destination_outpost_arn: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DestinationOutpostArn', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    encrypted: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Encrypted', 'style': 'form', 'explode': True }})
    kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'KmsKeyId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCopyImageHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCopyImageRequest:
    headers: GetCopyImageHeaders = dataclasses.field()
    query_params: GetCopyImageQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCopyImageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
