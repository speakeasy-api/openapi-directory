import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetGetSSHPublicKeyActionEnum(str, Enum):
    GET_SSH_PUBLIC_KEY = "GetSSHPublicKey"

class GetGetSSHPublicKeyEncodingEnum(str, Enum):
    SSH = "SSH"
    PEM = "PEM"

class GetGetSSHPublicKeyVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclasses.dataclass
class GetGetSSHPublicKeyQueryParams:
    action: GetGetSSHPublicKeyActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    encoding: GetGetSSHPublicKeyEncodingEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Encoding', 'style': 'form', 'explode': True }})
    ssh_public_key_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'SSHPublicKeyId', 'style': 'form', 'explode': True }})
    user_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'UserName', 'style': 'form', 'explode': True }})
    version: GetGetSSHPublicKeyVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGetSSHPublicKeyHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGetSSHPublicKeyRequest:
    headers: GetGetSSHPublicKeyHeaders = dataclasses.field()
    query_params: GetGetSSHPublicKeyQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGetSSHPublicKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
