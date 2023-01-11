import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cognitoidentityprovider as shared_cognitoidentityprovider


@dataclass_json
@dataclasses.dataclass
class IdentityPool:
    r"""IdentityPool
    An object representing an Amazon Cognito identity pool.
    """
    
    allow_unauthenticated_identities: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowUnauthenticatedIdentities') }})
    identity_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolId') }})
    identity_pool_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolName') }})
    allow_classic_flow: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowClassicFlow') }})
    cognito_identity_providers: Optional[list[shared_cognitoidentityprovider.CognitoIdentityProvider]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CognitoIdentityProviders') }})
    developer_provider_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeveloperProviderName') }})
    identity_pool_tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolTags') }})
    open_id_connect_provider_ar_ns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenIdConnectProviderARNs') }})
    saml_provider_ar_ns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SamlProviderARNs') }})
    supported_login_providers: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedLoginProviders') }})
    
