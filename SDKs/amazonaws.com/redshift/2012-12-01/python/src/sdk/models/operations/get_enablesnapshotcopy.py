import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetEnableSnapshotCopyActionEnum(str, Enum):
    ENABLE_SNAPSHOT_COPY = "EnableSnapshotCopy"

class GetEnableSnapshotCopyVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclasses.dataclass
class GetEnableSnapshotCopyQueryParams:
    action: GetEnableSnapshotCopyActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cluster_identifier: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ClusterIdentifier', 'style': 'form', 'explode': True }})
    destination_region: str = dataclasses.field(metadata={'query_param': { 'field_name': 'DestinationRegion', 'style': 'form', 'explode': True }})
    version: GetEnableSnapshotCopyVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    manual_snapshot_retention_period: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ManualSnapshotRetentionPeriod', 'style': 'form', 'explode': True }})
    retention_period: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'RetentionPeriod', 'style': 'form', 'explode': True }})
    snapshot_copy_grant_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SnapshotCopyGrantName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEnableSnapshotCopyHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEnableSnapshotCopyRequest:
    headers: GetEnableSnapshotCopyHeaders = dataclasses.field()
    query_params: GetEnableSnapshotCopyQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEnableSnapshotCopyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
