import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetPutIdentityPolicyActionEnum(str, Enum):
    PUT_IDENTITY_POLICY = "PutIdentityPolicy"

class GetPutIdentityPolicyVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclasses.dataclass
class GetPutIdentityPolicyQueryParams:
    action: GetPutIdentityPolicyActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    identity: str = dataclasses.field(metadata={'query_param': { 'field_name': 'Identity', 'style': 'form', 'explode': True }})
    policy: str = dataclasses.field(metadata={'query_param': { 'field_name': 'Policy', 'style': 'form', 'explode': True }})
    policy_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'PolicyName', 'style': 'form', 'explode': True }})
    version: GetPutIdentityPolicyVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPutIdentityPolicyHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPutIdentityPolicyRequest:
    headers: GetPutIdentityPolicyHeaders = dataclasses.field()
    query_params: GetPutIdentityPolicyQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPutIdentityPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
