import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RouteFilterPrefix:
    r"""RouteFilterPrefix
    Information about a route filter prefix that a customer can advertise through Border Gateway Protocol (BGP) over a public virtual interface.
    """
    
    cidr: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidr') }})
    
