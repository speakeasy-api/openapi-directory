import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PortRange:
    r"""PortRange
    A single port range specification. This is used for source and destination port ranges in the stateless rule <a>MatchAttributes</a>, <code>SourcePorts</code>, and <code>DestinationPorts</code> settings. 
    """
    
    from_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromPort') }})
    to_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ToPort') }})
    
