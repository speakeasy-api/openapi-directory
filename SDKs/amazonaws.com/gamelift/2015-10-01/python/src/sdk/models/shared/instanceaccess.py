import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instancecredentials as shared_instancecredentials
from ..shared import operatingsystem_enum as shared_operatingsystem_enum


@dataclass_json
@dataclasses.dataclass
class InstanceAccess:
    r"""InstanceAccess
    Information required to remotely connect to a fleet instance. Access is requested by calling <a>GetInstanceAccess</a>. 
    """
    
    credentials: Optional[shared_instancecredentials.InstanceCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credentials') }})
    fleet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    instance_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddress') }})
    operating_system: Optional[shared_operatingsystem_enum.OperatingSystemEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OperatingSystem') }})
    
