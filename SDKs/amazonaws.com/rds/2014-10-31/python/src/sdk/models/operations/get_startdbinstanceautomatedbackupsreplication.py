import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetStartDbInstanceAutomatedBackupsReplicationActionEnum(str, Enum):
    START_DB_INSTANCE_AUTOMATED_BACKUPS_REPLICATION = "StartDBInstanceAutomatedBackupsReplication"

class GetStartDbInstanceAutomatedBackupsReplicationVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclasses.dataclass
class GetStartDbInstanceAutomatedBackupsReplicationQueryParams:
    action: GetStartDbInstanceAutomatedBackupsReplicationActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    source_db_instance_arn: str = dataclasses.field(metadata={'query_param': { 'field_name': 'SourceDBInstanceArn', 'style': 'form', 'explode': True }})
    version: GetStartDbInstanceAutomatedBackupsReplicationVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    backup_retention_period: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'BackupRetentionPeriod', 'style': 'form', 'explode': True }})
    kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'KmsKeyId', 'style': 'form', 'explode': True }})
    pre_signed_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PreSignedUrl', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetStartDbInstanceAutomatedBackupsReplicationHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStartDbInstanceAutomatedBackupsReplicationRequest:
    headers: GetStartDbInstanceAutomatedBackupsReplicationHeaders = dataclasses.field()
    query_params: GetStartDbInstanceAutomatedBackupsReplicationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStartDbInstanceAutomatedBackupsReplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
