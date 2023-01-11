import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provideruseridentifiertype as shared_provideruseridentifiertype


@dataclass_json
@dataclasses.dataclass
class AdminDisableProviderForUserRequest:
    user: shared_provideruseridentifiertype.ProviderUserIdentifierType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('User') }})
    user_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    
