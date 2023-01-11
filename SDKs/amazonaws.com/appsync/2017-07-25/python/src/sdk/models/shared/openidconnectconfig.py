import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OpenIDConnectConfig:
    r"""OpenIDConnectConfig
    Describes an OpenID Connect configuration.
    """
    
    issuer: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    auth_ttl: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authTTL') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    iat_ttl: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iatTTL') }})
    
