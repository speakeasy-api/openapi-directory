import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import identityprovidertypetype_enum as shared_identityprovidertypetype_enum


@dataclass_json
@dataclasses.dataclass
class CreateIdentityProviderRequest:
    provider_details: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProviderDetails') }})
    provider_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProviderName') }})
    provider_type: shared_identityprovidertypetype_enum.IdentityProviderTypeTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProviderType') }})
    user_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    attribute_mapping: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeMapping') }})
    idp_identifiers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdpIdentifiers') }})
    
