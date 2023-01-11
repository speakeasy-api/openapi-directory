import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import dbinstanceautomatedbackupsreplicationlist as shared_dbinstanceautomatedbackupsreplicationlist
from ..shared import restorewindow as shared_restorewindow


@dataclasses.dataclass
class DbInstanceAutomatedBackupList:
    r"""DbInstanceAutomatedBackupList
    An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that existed at the time you deleted the source instance.
    """
    
    allocated_storage: Optional[int] = dataclasses.field(default=None)
    availability_zone: Optional[str] = dataclasses.field(default=None)
    backup_retention_period: Optional[int] = dataclasses.field(default=None)
    db_instance_arn: Optional[str] = dataclasses.field(default=None)
    db_instance_automated_backups_arn: Optional[str] = dataclasses.field(default=None)
    db_instance_automated_backups_replications: Optional[list[shared_dbinstanceautomatedbackupsreplicationlist.DbInstanceAutomatedBackupsReplicationList]] = dataclasses.field(default=None)
    db_instance_identifier: Optional[str] = dataclasses.field(default=None)
    dbi_resource_id: Optional[str] = dataclasses.field(default=None)
    encrypted: Optional[bool] = dataclasses.field(default=None)
    engine: Optional[str] = dataclasses.field(default=None)
    engine_version: Optional[str] = dataclasses.field(default=None)
    iam_database_authentication_enabled: Optional[bool] = dataclasses.field(default=None)
    instance_create_time: Optional[datetime] = dataclasses.field(default=None)
    iops: Optional[int] = dataclasses.field(default=None)
    kms_key_id: Optional[str] = dataclasses.field(default=None)
    license_model: Optional[str] = dataclasses.field(default=None)
    master_username: Optional[str] = dataclasses.field(default=None)
    option_group_name: Optional[str] = dataclasses.field(default=None)
    port: Optional[int] = dataclasses.field(default=None)
    region: Optional[str] = dataclasses.field(default=None)
    restore_window: Optional[shared_restorewindow.RestoreWindow] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    storage_type: Optional[str] = dataclasses.field(default=None)
    tde_credential_arn: Optional[str] = dataclasses.field(default=None)
    timezone: Optional[str] = dataclasses.field(default=None)
    vpc_id: Optional[str] = dataclasses.field(default=None)
    
