import dataclasses
from typing import Optional
from ..shared import dbsecuritygroupmembershiplist as shared_dbsecuritygroupmembershiplist
from ..shared import optionsettingconfigurationlist as shared_optionsettingconfigurationlist
from ..shared import vpcsecuritygroupmembershiplist as shared_vpcsecuritygroupmembershiplist


@dataclasses.dataclass
class OptionsList:
    db_security_group_memberships: Optional[list[shared_dbsecuritygroupmembershiplist.DbSecurityGroupMembershipList]] = dataclasses.field(default=None)
    option_description: Optional[str] = dataclasses.field(default=None)
    option_name: Optional[str] = dataclasses.field(default=None)
    option_settings: Optional[list[shared_optionsettingconfigurationlist.OptionSettingConfigurationList]] = dataclasses.field(default=None)
    permanent: Optional[bool] = dataclasses.field(default=None)
    persistent: Optional[bool] = dataclasses.field(default=None)
    port: Optional[int] = dataclasses.field(default=None)
    vpc_security_group_memberships: Optional[list[shared_vpcsecuritygroupmembershiplist.VpcSecurityGroupMembershipList]] = dataclasses.field(default=None)
    
