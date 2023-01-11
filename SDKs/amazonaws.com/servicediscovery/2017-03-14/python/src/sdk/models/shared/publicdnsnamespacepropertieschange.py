import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import publicdnspropertiesmutablechange as shared_publicdnspropertiesmutablechange


@dataclass_json
@dataclasses.dataclass
class PublicDNSNamespacePropertiesChange:
    r"""PublicDNSNamespacePropertiesChange
    Updated properties for the public DNS namespace.
    """
    
    dns_properties: shared_publicdnspropertiesmutablechange.PublicDNSPropertiesMutableChange = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsProperties') }})
    
