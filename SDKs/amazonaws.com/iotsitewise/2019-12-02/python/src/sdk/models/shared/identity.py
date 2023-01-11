import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import groupidentity as shared_groupidentity
from ..shared import iamroleidentity as shared_iamroleidentity
from ..shared import iamuseridentity as shared_iamuseridentity
from ..shared import useridentity as shared_useridentity


@dataclass_json
@dataclasses.dataclass
class Identity:
    r"""Identity
    <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve Amazon Web Services SSO identity IDs. You can find the Amazon Web Services SSO identity IDs in the URL of user and group pages in the <a href=\"https://console.aws.amazon.com/singlesignon\">Amazon Web Services SSO console</a>.</p> </note>
    """
    
    group: Optional[shared_groupidentity.GroupIdentity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    iam_role: Optional[shared_iamroleidentity.IamRoleIdentity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamRole') }})
    iam_user: Optional[shared_iamuseridentity.IamUserIdentity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamUser') }})
    user: Optional[shared_useridentity.UserIdentity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
