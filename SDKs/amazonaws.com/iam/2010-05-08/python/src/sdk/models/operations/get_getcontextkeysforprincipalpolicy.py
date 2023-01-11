import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetGetContextKeysForPrincipalPolicyActionEnum(str, Enum):
    GET_CONTEXT_KEYS_FOR_PRINCIPAL_POLICY = "GetContextKeysForPrincipalPolicy"

class GetGetContextKeysForPrincipalPolicyVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclasses.dataclass
class GetGetContextKeysForPrincipalPolicyQueryParams:
    action: GetGetContextKeysForPrincipalPolicyActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    policy_source_arn: str = dataclasses.field(metadata={'query_param': { 'field_name': 'PolicySourceArn', 'style': 'form', 'explode': True }})
    version: GetGetContextKeysForPrincipalPolicyVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    policy_input_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PolicyInputList', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGetContextKeysForPrincipalPolicyHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGetContextKeysForPrincipalPolicyRequest:
    headers: GetGetContextKeysForPrincipalPolicyHeaders = dataclasses.field()
    query_params: GetGetContextKeysForPrincipalPolicyQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGetContextKeysForPrincipalPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
