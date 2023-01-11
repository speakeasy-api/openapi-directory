import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import attachedpolicy as shared_attachedpolicy
from ..shared import attachedpermissionsboundary as shared_attachedpermissionsboundary
from ..shared import tag as shared_tag
from ..shared import policydetail as shared_policydetail


@dataclasses.dataclass
class UserDetail:
    r"""UserDetail
    <p>Contains information about an IAM user, including all the user's policies and all the IAM groups the user is in.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
    """
    
    arn: Optional[str] = dataclasses.field(default=None)
    attached_managed_policies: Optional[list[shared_attachedpolicy.AttachedPolicy]] = dataclasses.field(default=None)
    create_date: Optional[datetime] = dataclasses.field(default=None)
    group_list: Optional[list[str]] = dataclasses.field(default=None)
    path: Optional[str] = dataclasses.field(default=None)
    permissions_boundary: Optional[shared_attachedpermissionsboundary.AttachedPermissionsBoundary] = dataclasses.field(default=None)
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None)
    user_id: Optional[str] = dataclasses.field(default=None)
    user_name: Optional[str] = dataclasses.field(default=None)
    user_policy_list: Optional[list[shared_policydetail.PolicyDetail]] = dataclasses.field(default=None)
    
