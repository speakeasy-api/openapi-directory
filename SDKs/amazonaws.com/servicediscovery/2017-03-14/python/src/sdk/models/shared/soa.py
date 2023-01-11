import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Soa:
    r"""Soa
    Start of Authority (SOA) properties for a public or private DNS namespace.
    """
    
    ttl: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TTL') }})
    
