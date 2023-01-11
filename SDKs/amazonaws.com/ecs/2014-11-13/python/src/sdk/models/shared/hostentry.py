import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class HostEntry:
    r"""HostEntry
    Hostnames and IP address entries that are added to the <code>/etc/hosts</code> file of a container via the <code>extraHosts</code> parameter of its <a>ContainerDefinition</a>. 
    """
    
    hostname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    ip_address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    
