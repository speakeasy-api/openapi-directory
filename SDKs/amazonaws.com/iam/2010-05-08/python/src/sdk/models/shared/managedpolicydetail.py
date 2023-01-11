import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import policyversion as shared_policyversion


@dataclasses.dataclass
class ManagedPolicyDetail:
    r"""ManagedPolicyDetail
    <p>Contains information about a managed policy, including the policy's ARN, versions, and the number of principal entities (users, groups, and roles) that the policy is attached to.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p> <p>For more information about managed policies, see <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html\">Managed policies and inline policies</a> in the <i>IAM User Guide</i>. </p>
    """
    
    arn: Optional[str] = dataclasses.field(default=None)
    attachment_count: Optional[int] = dataclasses.field(default=None)
    create_date: Optional[datetime] = dataclasses.field(default=None)
    default_version_id: Optional[str] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    is_attachable: Optional[bool] = dataclasses.field(default=None)
    path: Optional[str] = dataclasses.field(default=None)
    permissions_boundary_usage_count: Optional[int] = dataclasses.field(default=None)
    policy_id: Optional[str] = dataclasses.field(default=None)
    policy_name: Optional[str] = dataclasses.field(default=None)
    policy_version_list: Optional[list[shared_policyversion.PolicyVersion]] = dataclasses.field(default=None)
    update_date: Optional[datetime] = dataclasses.field(default=None)
    
