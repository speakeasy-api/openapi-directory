import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import dbparametergroupstatuslist as shared_dbparametergroupstatuslist
from ..shared import dbsecuritygroupmembershiplist as shared_dbsecuritygroupmembershiplist
from ..shared import dbsubnetgroup as shared_dbsubnetgroup
from ..shared import endpoint as shared_endpoint
from ..shared import optiongroupmembershiplist as shared_optiongroupmembershiplist
from ..shared import pendingmodifiedvalues as shared_pendingmodifiedvalues
from ..shared import vpcsecuritygroupmembershiplist as shared_vpcsecuritygroupmembershiplist


@dataclasses.dataclass
class DbInstanceList:
    allocated_storage: Optional[int] = dataclasses.field(default=None)
    auto_minor_version_upgrade: Optional[bool] = dataclasses.field(default=None)
    availability_zone: Optional[str] = dataclasses.field(default=None)
    backup_retention_period: Optional[int] = dataclasses.field(default=None)
    character_set_name: Optional[str] = dataclasses.field(default=None)
    db_instance_class: Optional[str] = dataclasses.field(default=None)
    db_instance_identifier: Optional[str] = dataclasses.field(default=None)
    db_instance_status: Optional[str] = dataclasses.field(default=None)
    db_name: Optional[str] = dataclasses.field(default=None)
    db_parameter_groups: Optional[list[shared_dbparametergroupstatuslist.DbParameterGroupStatusList]] = dataclasses.field(default=None)
    db_security_groups: Optional[list[shared_dbsecuritygroupmembershiplist.DbSecurityGroupMembershipList]] = dataclasses.field(default=None)
    db_subnet_group: Optional[shared_dbsubnetgroup.DbSubnetGroup] = dataclasses.field(default=None)
    endpoint: Optional[shared_endpoint.Endpoint] = dataclasses.field(default=None)
    engine: Optional[str] = dataclasses.field(default=None)
    engine_version: Optional[str] = dataclasses.field(default=None)
    instance_create_time: Optional[datetime] = dataclasses.field(default=None)
    iops: Optional[int] = dataclasses.field(default=None)
    latest_restorable_time: Optional[datetime] = dataclasses.field(default=None)
    license_model: Optional[str] = dataclasses.field(default=None)
    master_username: Optional[str] = dataclasses.field(default=None)
    multi_az: Optional[bool] = dataclasses.field(default=None)
    option_group_memberships: Optional[list[shared_optiongroupmembershiplist.OptionGroupMembershipList]] = dataclasses.field(default=None)
    pending_modified_values: Optional[shared_pendingmodifiedvalues.PendingModifiedValues] = dataclasses.field(default=None)
    preferred_backup_window: Optional[str] = dataclasses.field(default=None)
    preferred_maintenance_window: Optional[str] = dataclasses.field(default=None)
    publicly_accessible: Optional[bool] = dataclasses.field(default=None)
    read_replica_db_instance_identifiers: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    read_replica_source_db_instance_identifier: Optional[str] = dataclasses.field(default=None)
    secondary_availability_zone: Optional[str] = dataclasses.field(default=None)
    vpc_security_groups: Optional[list[shared_vpcsecuritygroupmembershiplist.VpcSecurityGroupMembershipList]] = dataclasses.field(default=None)
    
