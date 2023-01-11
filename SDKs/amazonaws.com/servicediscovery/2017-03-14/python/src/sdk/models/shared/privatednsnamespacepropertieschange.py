import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import privatednspropertiesmutablechange as shared_privatednspropertiesmutablechange


@dataclass_json
@dataclasses.dataclass
class PrivateDNSNamespacePropertiesChange:
    r"""PrivateDNSNamespacePropertiesChange
    Updated properties for the private DNS namespace.
    """
    
    dns_properties: shared_privatednspropertiesmutablechange.PrivateDNSPropertiesMutableChange = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsProperties') }})
    
