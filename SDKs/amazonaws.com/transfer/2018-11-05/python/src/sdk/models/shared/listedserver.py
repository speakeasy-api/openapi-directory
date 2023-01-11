import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domain_enum as shared_domain_enum
from ..shared import endpointtype_enum as shared_endpointtype_enum
from ..shared import identityprovidertype_enum as shared_identityprovidertype_enum
from ..shared import state_enum as shared_state_enum


@dataclass_json
@dataclasses.dataclass
class ListedServer:
    r"""ListedServer
    Returns properties of a file transfer protocol-enabled server that was specified.
    """
    
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    domain: Optional[shared_domain_enum.DomainEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domain') }})
    endpoint_type: Optional[shared_endpointtype_enum.EndpointTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointType') }})
    identity_provider_type: Optional[shared_identityprovidertype_enum.IdentityProviderTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityProviderType') }})
    logging_role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoggingRole') }})
    server_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerId') }})
    state: Optional[shared_state_enum.StateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    user_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserCount') }})
    
