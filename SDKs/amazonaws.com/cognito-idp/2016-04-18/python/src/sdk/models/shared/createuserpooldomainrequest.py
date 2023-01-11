import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customdomainconfigtype as shared_customdomainconfigtype


@dataclass_json
@dataclasses.dataclass
class CreateUserPoolDomainRequest:
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domain') }})
    user_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    custom_domain_config: Optional[shared_customdomainconfigtype.CustomDomainConfigType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomDomainConfig') }})
    
