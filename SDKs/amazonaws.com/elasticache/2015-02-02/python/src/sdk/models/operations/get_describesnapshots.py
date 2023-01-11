import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDescribeSnapshotsActionEnum(str, Enum):
    DESCRIBE_SNAPSHOTS = "DescribeSnapshots"

class GetDescribeSnapshotsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclasses.dataclass
class GetDescribeSnapshotsQueryParams:
    action: GetDescribeSnapshotsActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetDescribeSnapshotsVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    cache_cluster_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'CacheClusterId', 'style': 'form', 'explode': True }})
    marker: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    replication_group_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ReplicationGroupId', 'style': 'form', 'explode': True }})
    show_node_group_config: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ShowNodeGroupConfig', 'style': 'form', 'explode': True }})
    snapshot_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SnapshotName', 'style': 'form', 'explode': True }})
    snapshot_source: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SnapshotSource', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDescribeSnapshotsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDescribeSnapshotsRequest:
    headers: GetDescribeSnapshotsHeaders = dataclasses.field()
    query_params: GetDescribeSnapshotsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDescribeSnapshotsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
