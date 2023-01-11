import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dnsservicediscovery as shared_dnsservicediscovery


@dataclass_json
@dataclasses.dataclass
class ServiceDiscovery:
    r"""ServiceDiscovery
    An object representing the service discovery information for a virtual node.
    """
    
    dns: Optional[shared_dnsservicediscovery.DNSServiceDiscovery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns') }})
    
