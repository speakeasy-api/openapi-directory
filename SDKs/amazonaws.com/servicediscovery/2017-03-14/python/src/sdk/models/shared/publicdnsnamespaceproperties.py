import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import publicdnspropertiesmutable as shared_publicdnspropertiesmutable


@dataclass_json
@dataclasses.dataclass
class PublicDNSNamespaceProperties:
    r"""PublicDNSNamespaceProperties
    DNS properties for the public DNS namespace.
    """
    
    dns_properties: shared_publicdnspropertiesmutable.PublicDNSPropertiesMutable = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsProperties') }})
    
