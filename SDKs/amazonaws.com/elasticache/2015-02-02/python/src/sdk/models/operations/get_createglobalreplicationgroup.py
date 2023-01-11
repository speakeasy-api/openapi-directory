import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCreateGlobalReplicationGroupActionEnum(str, Enum):
    CREATE_GLOBAL_REPLICATION_GROUP = "CreateGlobalReplicationGroup"

class GetCreateGlobalReplicationGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclasses.dataclass
class GetCreateGlobalReplicationGroupQueryParams:
    action: GetCreateGlobalReplicationGroupActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    global_replication_group_id_suffix: str = dataclasses.field(metadata={'query_param': { 'field_name': 'GlobalReplicationGroupIdSuffix', 'style': 'form', 'explode': True }})
    primary_replication_group_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'PrimaryReplicationGroupId', 'style': 'form', 'explode': True }})
    version: GetCreateGlobalReplicationGroupVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    global_replication_group_description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'GlobalReplicationGroupDescription', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCreateGlobalReplicationGroupHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCreateGlobalReplicationGroupRequest:
    headers: GetCreateGlobalReplicationGroupHeaders = dataclasses.field()
    query_params: GetCreateGlobalReplicationGroupQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCreateGlobalReplicationGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
