import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assumedrole as shared_assumedrole
from ..shared import awsaccount as shared_awsaccount
from ..shared import awsservice as shared_awsservice
from ..shared import federateduser as shared_federateduser
from ..shared import iamuser as shared_iamuser
from ..shared import useridentityroot as shared_useridentityroot
from ..shared import useridentitytype_enum as shared_useridentitytype_enum


@dataclass_json
@dataclasses.dataclass
class UserIdentity:
    r"""UserIdentity
    Provides information about the type and other characteristics of an entity that performed an action on an affected resource.
    """
    
    assumed_role: Optional[shared_assumedrole.AssumedRole] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assumedRole') }})
    aws_account: Optional[shared_awsaccount.AwsAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsAccount') }})
    aws_service: Optional[shared_awsservice.AwsService] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsService') }})
    federated_user: Optional[shared_federateduser.FederatedUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('federatedUser') }})
    iam_user: Optional[shared_iamuser.IamUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamUser') }})
    root: Optional[shared_useridentityroot.UserIdentityRoot] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('root') }})
    type: Optional[shared_useridentitytype_enum.UserIdentityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
