import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import identityprovidertype_enum as shared_identityprovidertype_enum


@dataclass_json
@dataclasses.dataclass
class DescribeIdentityProviderConfigurationResponse:
    identity_provider_saml_metadata: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityProviderSamlMetadata') }})
    identity_provider_type: Optional[shared_identityprovidertype_enum.IdentityProviderTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityProviderType') }})
    service_provider_saml_metadata: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceProviderSamlMetadata') }})
    
