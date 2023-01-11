import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCopyDbSnapshotActionEnum(str, Enum):
    COPY_DB_SNAPSHOT = "CopyDBSnapshot"

class GetCopyDbSnapshotVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_02_12 = "2013-02-12"


@dataclasses.dataclass
class GetCopyDbSnapshotQueryParams:
    action: GetCopyDbSnapshotActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    source_db_snapshot_identifier: str = dataclasses.field(metadata={'query_param': { 'field_name': 'SourceDBSnapshotIdentifier', 'style': 'form', 'explode': True }})
    target_db_snapshot_identifier: str = dataclasses.field(metadata={'query_param': { 'field_name': 'TargetDBSnapshotIdentifier', 'style': 'form', 'explode': True }})
    version: GetCopyDbSnapshotVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCopyDbSnapshotHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCopyDbSnapshotRequest:
    headers: GetCopyDbSnapshotHeaders = dataclasses.field()
    query_params: GetCopyDbSnapshotQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCopyDbSnapshotResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
