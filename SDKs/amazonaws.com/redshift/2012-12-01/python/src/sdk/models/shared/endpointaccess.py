import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import vpcendpoint as shared_vpcendpoint
from ..shared import vpcsecuritygroupmembershiplist as shared_vpcsecuritygroupmembershiplist


@dataclasses.dataclass
class EndpointAccess:
    r"""EndpointAccess
    Describes a Redshift-managed VPC endpoint.
    """
    
    address: Optional[str] = dataclasses.field(default=None)
    cluster_identifier: Optional[str] = dataclasses.field(default=None)
    endpoint_create_time: Optional[datetime] = dataclasses.field(default=None)
    endpoint_name: Optional[str] = dataclasses.field(default=None)
    endpoint_status: Optional[str] = dataclasses.field(default=None)
    port: Optional[int] = dataclasses.field(default=None)
    resource_owner: Optional[str] = dataclasses.field(default=None)
    subnet_group_name: Optional[str] = dataclasses.field(default=None)
    vpc_endpoint: Optional[shared_vpcendpoint.VpcEndpoint] = dataclasses.field(default=None)
    vpc_security_groups: Optional[list[shared_vpcsecuritygroupmembershiplist.VpcSecurityGroupMembershipList]] = dataclasses.field(default=None)
    
