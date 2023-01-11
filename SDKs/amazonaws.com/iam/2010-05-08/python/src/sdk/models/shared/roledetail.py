import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import attachedpolicy as shared_attachedpolicy
from ..shared import instanceprofile as shared_instanceprofile
from ..shared import attachedpermissionsboundary as shared_attachedpermissionsboundary
from ..shared import rolelastused as shared_rolelastused
from ..shared import policydetail as shared_policydetail
from ..shared import tag as shared_tag


@dataclasses.dataclass
class RoleDetail:
    r"""RoleDetail
    <p>Contains information about an IAM role, including all of the role's policies.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
    """
    
    arn: Optional[str] = dataclasses.field(default=None)
    assume_role_policy_document: Optional[str] = dataclasses.field(default=None)
    attached_managed_policies: Optional[list[shared_attachedpolicy.AttachedPolicy]] = dataclasses.field(default=None)
    create_date: Optional[datetime] = dataclasses.field(default=None)
    instance_profile_list: Optional[list[shared_instanceprofile.InstanceProfile]] = dataclasses.field(default=None)
    path: Optional[str] = dataclasses.field(default=None)
    permissions_boundary: Optional[shared_attachedpermissionsboundary.AttachedPermissionsBoundary] = dataclasses.field(default=None)
    role_id: Optional[str] = dataclasses.field(default=None)
    role_last_used: Optional[shared_rolelastused.RoleLastUsed] = dataclasses.field(default=None)
    role_name: Optional[str] = dataclasses.field(default=None)
    role_policy_list: Optional[list[shared_policydetail.PolicyDetail]] = dataclasses.field(default=None)
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None)
    
