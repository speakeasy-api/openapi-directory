import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetAuthorizeSnapshotAccessActionEnum(str, Enum):
    AUTHORIZE_SNAPSHOT_ACCESS = "AuthorizeSnapshotAccess"

class GetAuthorizeSnapshotAccessVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclasses.dataclass
class GetAuthorizeSnapshotAccessQueryParams:
    account_with_restore_access: str = dataclasses.field(metadata={'query_param': { 'field_name': 'AccountWithRestoreAccess', 'style': 'form', 'explode': True }})
    action: GetAuthorizeSnapshotAccessActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    snapshot_identifier: str = dataclasses.field(metadata={'query_param': { 'field_name': 'SnapshotIdentifier', 'style': 'form', 'explode': True }})
    version: GetAuthorizeSnapshotAccessVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    snapshot_cluster_identifier: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SnapshotClusterIdentifier', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAuthorizeSnapshotAccessHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAuthorizeSnapshotAccessRequest:
    headers: GetAuthorizeSnapshotAccessHeaders = dataclasses.field()
    query_params: GetAuthorizeSnapshotAccessQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAuthorizeSnapshotAccessResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
