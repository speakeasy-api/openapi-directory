import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import protocol_enum as shared_protocol_enum


@dataclass_json
@dataclasses.dataclass
class TestIdentityProviderRequest:
    server_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerId') }})
    user_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    server_protocol: Optional[shared_protocol_enum.ProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerProtocol') }})
    source_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceIp') }})
    user_password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPassword') }})
    
