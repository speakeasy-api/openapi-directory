import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetModifyUserActionEnum(str, Enum):
    MODIFY_USER = "ModifyUser"

class GetModifyUserVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclasses.dataclass
class GetModifyUserQueryParams:
    action: GetModifyUserActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    user_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'UserId', 'style': 'form', 'explode': True }})
    version: GetModifyUserVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    access_string: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AccessString', 'style': 'form', 'explode': True }})
    append_access_string: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AppendAccessString', 'style': 'form', 'explode': True }})
    no_password_required: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NoPasswordRequired', 'style': 'form', 'explode': True }})
    passwords: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Passwords', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetModifyUserHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetModifyUserRequest:
    headers: GetModifyUserHeaders = dataclasses.field()
    query_params: GetModifyUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetModifyUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
