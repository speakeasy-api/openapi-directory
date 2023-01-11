import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetUpdateAccountPasswordPolicyActionEnum(str, Enum):
    UPDATE_ACCOUNT_PASSWORD_POLICY = "UpdateAccountPasswordPolicy"

class GetUpdateAccountPasswordPolicyVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclasses.dataclass
class GetUpdateAccountPasswordPolicyQueryParams:
    action: GetUpdateAccountPasswordPolicyActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetUpdateAccountPasswordPolicyVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    allow_users_to_change_password: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AllowUsersToChangePassword', 'style': 'form', 'explode': True }})
    hard_expiry: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'HardExpiry', 'style': 'form', 'explode': True }})
    max_password_age: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxPasswordAge', 'style': 'form', 'explode': True }})
    minimum_password_length: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MinimumPasswordLength', 'style': 'form', 'explode': True }})
    password_reuse_prevention: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PasswordReusePrevention', 'style': 'form', 'explode': True }})
    require_lowercase_characters: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'RequireLowercaseCharacters', 'style': 'form', 'explode': True }})
    require_numbers: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'RequireNumbers', 'style': 'form', 'explode': True }})
    require_symbols: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'RequireSymbols', 'style': 'form', 'explode': True }})
    require_uppercase_characters: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'RequireUppercaseCharacters', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUpdateAccountPasswordPolicyHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUpdateAccountPasswordPolicyRequest:
    headers: GetUpdateAccountPasswordPolicyHeaders = dataclasses.field()
    query_params: GetUpdateAccountPasswordPolicyQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUpdateAccountPasswordPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
