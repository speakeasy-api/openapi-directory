import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import soa as shared_soa


@dataclass_json
@dataclasses.dataclass
class PrivateDNSPropertiesMutable:
    r"""PrivateDNSPropertiesMutable
    DNS properties for the private DNS namespace.
    """
    
    soa: shared_soa.Soa = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SOA') }})
    
