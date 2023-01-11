import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetRestoreDbInstanceFromDbSnapshotActionEnum(str, Enum):
    RESTORE_DB_INSTANCE_FROM_DB_SNAPSHOT = "RestoreDBInstanceFromDBSnapshot"

class GetRestoreDbInstanceFromDbSnapshotVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_01_10 = "2013-01-10"


@dataclasses.dataclass
class GetRestoreDbInstanceFromDbSnapshotQueryParams:
    action: GetRestoreDbInstanceFromDbSnapshotActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_instance_identifier: str = dataclasses.field(metadata={'query_param': { 'field_name': 'DBInstanceIdentifier', 'style': 'form', 'explode': True }})
    db_snapshot_identifier: str = dataclasses.field(metadata={'query_param': { 'field_name': 'DBSnapshotIdentifier', 'style': 'form', 'explode': True }})
    version: GetRestoreDbInstanceFromDbSnapshotVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    auto_minor_version_upgrade: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AutoMinorVersionUpgrade', 'style': 'form', 'explode': True }})
    availability_zone: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AvailabilityZone', 'style': 'form', 'explode': True }})
    db_instance_class: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DBInstanceClass', 'style': 'form', 'explode': True }})
    db_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DBName', 'style': 'form', 'explode': True }})
    db_subnet_group_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DBSubnetGroupName', 'style': 'form', 'explode': True }})
    engine: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Engine', 'style': 'form', 'explode': True }})
    iops: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Iops', 'style': 'form', 'explode': True }})
    license_model: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'LicenseModel', 'style': 'form', 'explode': True }})
    multi_az: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MultiAZ', 'style': 'form', 'explode': True }})
    option_group_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'OptionGroupName', 'style': 'form', 'explode': True }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Port', 'style': 'form', 'explode': True }})
    publicly_accessible: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PubliclyAccessible', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRestoreDbInstanceFromDbSnapshotHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRestoreDbInstanceFromDbSnapshotRequest:
    headers: GetRestoreDbInstanceFromDbSnapshotHeaders = dataclasses.field()
    query_params: GetRestoreDbInstanceFromDbSnapshotQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRestoreDbInstanceFromDbSnapshotResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
