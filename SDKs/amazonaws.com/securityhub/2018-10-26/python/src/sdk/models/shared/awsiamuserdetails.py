import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsiamattachedmanagedpolicy as shared_awsiamattachedmanagedpolicy
from ..shared import awsiampermissionsboundary as shared_awsiampermissionsboundary
from ..shared import awsiamuserpolicy as shared_awsiamuserpolicy


@dataclass_json
@dataclasses.dataclass
class AwsIamUserDetails:
    r"""AwsIamUserDetails
    Information about an IAM user.
    """
    
    attached_managed_policies: Optional[list[shared_awsiamattachedmanagedpolicy.AwsIamAttachedManagedPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachedManagedPolicies') }})
    create_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateDate') }})
    group_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupList') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Path') }})
    permissions_boundary: Optional[shared_awsiampermissionsboundary.AwsIamPermissionsBoundary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionsBoundary') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserId') }})
    user_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    user_policy_list: Optional[list[shared_awsiamuserpolicy.AwsIamUserPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPolicyList') }})
    
