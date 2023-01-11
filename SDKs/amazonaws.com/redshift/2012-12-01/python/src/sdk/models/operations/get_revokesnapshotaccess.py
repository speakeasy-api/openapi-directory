import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetRevokeSnapshotAccessActionEnum(str, Enum):
    REVOKE_SNAPSHOT_ACCESS = "RevokeSnapshotAccess"

class GetRevokeSnapshotAccessVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclasses.dataclass
class GetRevokeSnapshotAccessQueryParams:
    account_with_restore_access: str = dataclasses.field(metadata={'query_param': { 'field_name': 'AccountWithRestoreAccess', 'style': 'form', 'explode': True }})
    action: GetRevokeSnapshotAccessActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    snapshot_identifier: str = dataclasses.field(metadata={'query_param': { 'field_name': 'SnapshotIdentifier', 'style': 'form', 'explode': True }})
    version: GetRevokeSnapshotAccessVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    snapshot_cluster_identifier: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SnapshotClusterIdentifier', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRevokeSnapshotAccessHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRevokeSnapshotAccessRequest:
    headers: GetRevokeSnapshotAccessHeaders = dataclasses.field()
    query_params: GetRevokeSnapshotAccessQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRevokeSnapshotAccessResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
