import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dnsproperties as shared_dnsproperties
from ..shared import httpproperties as shared_httpproperties


@dataclass_json
@dataclasses.dataclass
class NamespaceProperties:
    r"""NamespaceProperties
    A complex type that contains information that's specific to the namespace type.
    """
    
    dns_properties: Optional[shared_dnsproperties.DNSProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsProperties') }})
    http_properties: Optional[shared_httpproperties.HTTPProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HttpProperties') }})
    
