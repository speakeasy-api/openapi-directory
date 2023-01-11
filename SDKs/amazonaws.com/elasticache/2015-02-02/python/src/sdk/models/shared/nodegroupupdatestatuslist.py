import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import nodegroupmemberupdatestatuslist as shared_nodegroupmemberupdatestatuslist


@dataclasses.dataclass
class NodeGroupUpdateStatusList:
    r"""NodeGroupUpdateStatusList
    The status of the service update on the node group 
    """
    
    node_group_id: Optional[str] = dataclasses.field(default=None)
    node_group_member_update_status: Optional[list[shared_nodegroupmemberupdatestatuslist.NodeGroupMemberUpdateStatusList]] = dataclasses.field(default=None)
    
