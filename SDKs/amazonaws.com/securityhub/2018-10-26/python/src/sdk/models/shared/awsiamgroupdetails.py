import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsiamattachedmanagedpolicy as shared_awsiamattachedmanagedpolicy
from ..shared import awsiamgrouppolicy as shared_awsiamgrouppolicy


@dataclass_json
@dataclasses.dataclass
class AwsIamGroupDetails:
    r"""AwsIamGroupDetails
    Contains details about an IAM group.
    """
    
    attached_managed_policies: Optional[list[shared_awsiamattachedmanagedpolicy.AwsIamAttachedManagedPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachedManagedPolicies') }})
    create_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateDate') }})
    group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupId') }})
    group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupName') }})
    group_policy_list: Optional[list[shared_awsiamgrouppolicy.AwsIamGroupPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupPolicyList') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Path') }})
    
