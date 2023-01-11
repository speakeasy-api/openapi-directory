import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import identityprovidertype as shared_identityprovidertype


@dataclass_json
@dataclasses.dataclass
class GetIdentityProviderByIdentifierResponse:
    identity_provider: shared_identityprovidertype.IdentityProviderType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityProvider') }})
    
