import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import attachedpolicy as shared_attachedpolicy
from ..shared import policydetail as shared_policydetail


@dataclasses.dataclass
class GroupDetail:
    r"""GroupDetail
    <p>Contains information about an IAM group, including all of the group's policies.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
    """
    
    arn: Optional[str] = dataclasses.field(default=None)
    attached_managed_policies: Optional[list[shared_attachedpolicy.AttachedPolicy]] = dataclasses.field(default=None)
    create_date: Optional[datetime] = dataclasses.field(default=None)
    group_id: Optional[str] = dataclasses.field(default=None)
    group_name: Optional[str] = dataclasses.field(default=None)
    group_policy_list: Optional[list[shared_policydetail.PolicyDetail]] = dataclasses.field(default=None)
    path: Optional[str] = dataclasses.field(default=None)
    
