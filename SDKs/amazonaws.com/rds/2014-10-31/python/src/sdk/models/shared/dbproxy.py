import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import userauthconfiginfo as shared_userauthconfiginfo
from ..shared import dbproxystatus_enum as shared_dbproxystatus_enum


@dataclasses.dataclass
class DbProxy:
    r"""DbProxy
    <p>The data structure representing a proxy managed by the RDS Proxy.</p> <p>This data type is used as a response element in the <code>DescribeDBProxies</code> action.</p>
    """
    
    auth: Optional[list[shared_userauthconfiginfo.UserAuthConfigInfo]] = dataclasses.field(default=None)
    created_date: Optional[datetime] = dataclasses.field(default=None)
    db_proxy_arn: Optional[str] = dataclasses.field(default=None)
    db_proxy_name: Optional[str] = dataclasses.field(default=None)
    debug_logging: Optional[bool] = dataclasses.field(default=None)
    endpoint: Optional[str] = dataclasses.field(default=None)
    engine_family: Optional[str] = dataclasses.field(default=None)
    idle_client_timeout: Optional[int] = dataclasses.field(default=None)
    require_tls: Optional[bool] = dataclasses.field(default=None)
    role_arn: Optional[str] = dataclasses.field(default=None)
    status: Optional[shared_dbproxystatus_enum.DbProxyStatusEnum] = dataclasses.field(default=None)
    updated_date: Optional[datetime] = dataclasses.field(default=None)
    vpc_id: Optional[str] = dataclasses.field(default=None)
    vpc_security_group_ids: Optional[list[str]] = dataclasses.field(default=None)
    vpc_subnet_ids: Optional[list[str]] = dataclasses.field(default=None)
    
