import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import staticip as shared_staticip


@dataclass_json
@dataclasses.dataclass
class GetStaticIPResult:
    static_ip: Optional[shared_staticip.StaticIP] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticIp') }})
    
