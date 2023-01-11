import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cidrauthorizationcontext as shared_cidrauthorizationcontext


@dataclass_json
@dataclasses.dataclass
class ProvisionByoipCidrRequest:
    cidr: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cidr') }})
    cidr_authorization_context: shared_cidrauthorizationcontext.CidrAuthorizationContext = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CidrAuthorizationContext') }})
    
