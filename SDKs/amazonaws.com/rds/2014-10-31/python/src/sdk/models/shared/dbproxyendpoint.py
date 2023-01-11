import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import dbproxyendpointstatus_enum as shared_dbproxyendpointstatus_enum
from ..shared import dbproxyendpointtargetrole_enum as shared_dbproxyendpointtargetrole_enum


@dataclasses.dataclass
class DbProxyEndpoint:
    r"""DbProxyEndpoint
    <p>The data structure representing an endpoint associated with a DB proxy. RDS automatically creates one endpoint for each DB proxy. For Aurora DB clusters, you can associate additional endpoints with the same DB proxy. These endpoints can be read/write or read-only. They can also reside in different VPCs than the associated DB proxy.</p> <p>This data type is used as a response element in the <code>DescribeDBProxyEndpoints</code> operation.</p>
    """
    
    created_date: Optional[datetime] = dataclasses.field(default=None)
    db_proxy_endpoint_arn: Optional[str] = dataclasses.field(default=None)
    db_proxy_endpoint_name: Optional[str] = dataclasses.field(default=None)
    db_proxy_name: Optional[str] = dataclasses.field(default=None)
    endpoint: Optional[str] = dataclasses.field(default=None)
    is_default: Optional[bool] = dataclasses.field(default=None)
    status: Optional[shared_dbproxyendpointstatus_enum.DbProxyEndpointStatusEnum] = dataclasses.field(default=None)
    target_role: Optional[shared_dbproxyendpointtargetrole_enum.DbProxyEndpointTargetRoleEnum] = dataclasses.field(default=None)
    vpc_id: Optional[str] = dataclasses.field(default=None)
    vpc_security_group_ids: Optional[list[str]] = dataclasses.field(default=None)
    vpc_subnet_ids: Optional[list[str]] = dataclasses.field(default=None)
    
