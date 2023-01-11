import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDeleteDbInstanceActionEnum(str, Enum):
    DELETE_DB_INSTANCE = "DeleteDBInstance"

class GetDeleteDbInstanceVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclasses.dataclass
class GetDeleteDbInstanceQueryParams:
    action: GetDeleteDbInstanceActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_instance_identifier: str = dataclasses.field(metadata={'query_param': { 'field_name': 'DBInstanceIdentifier', 'style': 'form', 'explode': True }})
    version: GetDeleteDbInstanceVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    delete_automated_backups: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DeleteAutomatedBackups', 'style': 'form', 'explode': True }})
    final_db_snapshot_identifier: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FinalDBSnapshotIdentifier', 'style': 'form', 'explode': True }})
    skip_final_snapshot: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SkipFinalSnapshot', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDeleteDbInstanceHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeleteDbInstanceRequest:
    headers: GetDeleteDbInstanceHeaders = dataclasses.field()
    query_params: GetDeleteDbInstanceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeleteDbInstanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
