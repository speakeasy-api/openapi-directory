import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsiamaccesskeysessioncontext as shared_awsiamaccesskeysessioncontext
from ..shared import awsiamaccesskeystatus_enum as shared_awsiamaccesskeystatus_enum


@dataclass_json
@dataclasses.dataclass
class AwsIamAccessKeyDetails:
    r"""AwsIamAccessKeyDetails
    IAM access key details related to a finding.
    """
    
    access_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessKeyId') }})
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt') }})
    principal_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrincipalId') }})
    principal_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrincipalName') }})
    principal_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrincipalType') }})
    session_context: Optional[shared_awsiamaccesskeysessioncontext.AwsIamAccessKeySessionContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SessionContext') }})
    status: Optional[shared_awsiamaccesskeystatus_enum.AwsIamAccessKeyStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    user_name: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    
