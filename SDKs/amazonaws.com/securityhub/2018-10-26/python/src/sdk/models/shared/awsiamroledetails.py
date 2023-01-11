import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsiamattachedmanagedpolicy as shared_awsiamattachedmanagedpolicy
from ..shared import awsiaminstanceprofile as shared_awsiaminstanceprofile
from ..shared import awsiampermissionsboundary as shared_awsiampermissionsboundary
from ..shared import awsiamrolepolicy as shared_awsiamrolepolicy


@dataclass_json
@dataclasses.dataclass
class AwsIamRoleDetails:
    r"""AwsIamRoleDetails
    Contains information about an IAM role, including all of the role's policies.
    """
    
    assume_role_policy_document: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssumeRolePolicyDocument') }})
    attached_managed_policies: Optional[list[shared_awsiamattachedmanagedpolicy.AwsIamAttachedManagedPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachedManagedPolicies') }})
    create_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateDate') }})
    instance_profile_list: Optional[list[shared_awsiaminstanceprofile.AwsIamInstanceProfile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceProfileList') }})
    max_session_duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxSessionDuration') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Path') }})
    permissions_boundary: Optional[shared_awsiampermissionsboundary.AwsIamPermissionsBoundary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionsBoundary') }})
    role_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleId') }})
    role_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleName') }})
    role_policy_list: Optional[list[shared_awsiamrolepolicy.AwsIamRolePolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RolePolicyList') }})
    
