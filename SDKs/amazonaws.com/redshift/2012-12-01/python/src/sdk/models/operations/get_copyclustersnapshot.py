import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCopyClusterSnapshotActionEnum(str, Enum):
    COPY_CLUSTER_SNAPSHOT = "CopyClusterSnapshot"

class GetCopyClusterSnapshotVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclasses.dataclass
class GetCopyClusterSnapshotQueryParams:
    action: GetCopyClusterSnapshotActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    source_snapshot_identifier: str = dataclasses.field(metadata={'query_param': { 'field_name': 'SourceSnapshotIdentifier', 'style': 'form', 'explode': True }})
    target_snapshot_identifier: str = dataclasses.field(metadata={'query_param': { 'field_name': 'TargetSnapshotIdentifier', 'style': 'form', 'explode': True }})
    version: GetCopyClusterSnapshotVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    manual_snapshot_retention_period: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ManualSnapshotRetentionPeriod', 'style': 'form', 'explode': True }})
    source_snapshot_cluster_identifier: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SourceSnapshotClusterIdentifier', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCopyClusterSnapshotHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCopyClusterSnapshotRequest:
    headers: GetCopyClusterSnapshotHeaders = dataclasses.field()
    query_params: GetCopyClusterSnapshotQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCopyClusterSnapshotResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
