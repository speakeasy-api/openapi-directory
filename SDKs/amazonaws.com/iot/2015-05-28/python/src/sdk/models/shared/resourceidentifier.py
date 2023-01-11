import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import policyversionidentifier as shared_policyversionidentifier


@dataclass_json
@dataclasses.dataclass
class ResourceIdentifier:
    r"""ResourceIdentifier
    Information that identifies the noncompliant resource.
    """
    
    account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    ca_certificate_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caCertificateId') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    cognito_identity_pool_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cognitoIdentityPoolId') }})
    device_certificate_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceCertificateId') }})
    iam_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamRoleArn') }})
    policy_version_identifier: Optional[shared_policyversionidentifier.PolicyVersionIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyVersionIdentifier') }})
    role_alias_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleAliasArn') }})
    
