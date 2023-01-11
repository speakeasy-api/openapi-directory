import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PortMapping:
    r"""PortMapping
    An object representing a port mapping.
    """
    
    application_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationPort') }})
    job_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobPort') }})
    enable_on_public_ip: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableOnPublicIp') }})
    
