import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Address:
    r"""Address
    A single IP address specification. This is used in the <a>MatchAttributes</a> source and destination specifications.
    """
    
    address_definition: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressDefinition') }})
    
