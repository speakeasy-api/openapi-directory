import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ActionLocalIPDetails:
    r"""ActionLocalIPDetails
    Provides information about the IP address where the scanned port is located.
    """
    
    ip_address_v4: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddressV4') }})
    
