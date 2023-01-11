import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ipset as shared_ipset
from ..shared import portset as shared_portset


@dataclass_json
@dataclasses.dataclass
class RuleVariables:
    r"""RuleVariables
    Settings that are available for use in the rules in the <a>RuleGroup</a> where this is defined. 
    """
    
    ip_sets: Optional[dict[str, shared_ipset.IPSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IPSets') }})
    port_sets: Optional[dict[str, shared_portset.PortSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortSets') }})
    
