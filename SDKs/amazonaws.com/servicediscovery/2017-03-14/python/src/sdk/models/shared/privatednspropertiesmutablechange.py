import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import soachange as shared_soachange


@dataclass_json
@dataclasses.dataclass
class PrivateDNSPropertiesMutableChange:
    r"""PrivateDNSPropertiesMutableChange
    Updated DNS properties for the private DNS namespace.
    """
    
    soa: shared_soachange.SoaChange = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SOA') }})
    
