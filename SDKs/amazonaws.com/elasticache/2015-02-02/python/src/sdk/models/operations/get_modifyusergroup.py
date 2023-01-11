import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetModifyUserGroupActionEnum(str, Enum):
    MODIFY_USER_GROUP = "ModifyUserGroup"

class GetModifyUserGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclasses.dataclass
class GetModifyUserGroupQueryParams:
    action: GetModifyUserGroupActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    user_group_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'UserGroupId', 'style': 'form', 'explode': True }})
    version: GetModifyUserGroupVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    user_ids_to_add: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'UserIdsToAdd', 'style': 'form', 'explode': True }})
    user_ids_to_remove: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'UserIdsToRemove', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetModifyUserGroupHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetModifyUserGroupRequest:
    headers: GetModifyUserGroupHeaders = dataclasses.field()
    query_params: GetModifyUserGroupQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetModifyUserGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
