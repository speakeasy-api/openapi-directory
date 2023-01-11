import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDeleteReplicationGroupActionEnum(str, Enum):
    DELETE_REPLICATION_GROUP = "DeleteReplicationGroup"

class GetDeleteReplicationGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclasses.dataclass
class GetDeleteReplicationGroupQueryParams:
    action: GetDeleteReplicationGroupActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    replication_group_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ReplicationGroupId', 'style': 'form', 'explode': True }})
    version: GetDeleteReplicationGroupVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    final_snapshot_identifier: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FinalSnapshotIdentifier', 'style': 'form', 'explode': True }})
    retain_primary_cluster: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'RetainPrimaryCluster', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDeleteReplicationGroupHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeleteReplicationGroupRequest:
    headers: GetDeleteReplicationGroupHeaders = dataclasses.field()
    query_params: GetDeleteReplicationGroupQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeleteReplicationGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
