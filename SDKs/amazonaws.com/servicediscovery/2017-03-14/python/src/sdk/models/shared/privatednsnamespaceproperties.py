import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import privatednspropertiesmutable as shared_privatednspropertiesmutable


@dataclass_json
@dataclasses.dataclass
class PrivateDNSNamespaceProperties:
    r"""PrivateDNSNamespaceProperties
    DNS properties for the private DNS namespace.
    """
    
    dns_properties: shared_privatednspropertiesmutable.PrivateDNSPropertiesMutable = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsProperties') }})
    
