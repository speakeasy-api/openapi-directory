import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import radiusauthenticationprotocol_enum as shared_radiusauthenticationprotocol_enum


@dataclass_json
@dataclasses.dataclass
class RadiusSettings:
    r"""RadiusSettings
    Contains information about a Remote Authentication Dial In User Service (RADIUS) server.
    """
    
    authentication_protocol: Optional[shared_radiusauthenticationprotocol_enum.RadiusAuthenticationProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthenticationProtocol') }})
    display_label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayLabel') }})
    radius_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RadiusPort') }})
    radius_retries: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RadiusRetries') }})
    radius_servers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RadiusServers') }})
    radius_timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RadiusTimeout') }})
    shared_secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SharedSecret') }})
    use_same_username: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseSameUsername') }})
    
