import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetModifyGlobalReplicationGroupActionEnum(str, Enum):
    MODIFY_GLOBAL_REPLICATION_GROUP = "ModifyGlobalReplicationGroup"

class GetModifyGlobalReplicationGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclasses.dataclass
class GetModifyGlobalReplicationGroupQueryParams:
    action: GetModifyGlobalReplicationGroupActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    apply_immediately: bool = dataclasses.field(metadata={'query_param': { 'field_name': 'ApplyImmediately', 'style': 'form', 'explode': True }})
    global_replication_group_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'GlobalReplicationGroupId', 'style': 'form', 'explode': True }})
    version: GetModifyGlobalReplicationGroupVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    automatic_failover_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AutomaticFailoverEnabled', 'style': 'form', 'explode': True }})
    cache_node_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'CacheNodeType', 'style': 'form', 'explode': True }})
    cache_parameter_group_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'CacheParameterGroupName', 'style': 'form', 'explode': True }})
    engine_version: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EngineVersion', 'style': 'form', 'explode': True }})
    global_replication_group_description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'GlobalReplicationGroupDescription', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetModifyGlobalReplicationGroupHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetModifyGlobalReplicationGroupRequest:
    headers: GetModifyGlobalReplicationGroupHeaders = dataclasses.field()
    query_params: GetModifyGlobalReplicationGroupQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetModifyGlobalReplicationGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
