import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import privatednsnamespacepropertieschange as shared_privatednsnamespacepropertieschange


@dataclass_json
@dataclasses.dataclass
class PrivateDNSNamespaceChange:
    r"""PrivateDNSNamespaceChange
    Updated properties for the private DNS namespace.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    properties: Optional[shared_privatednsnamespacepropertieschange.PrivateDNSNamespacePropertiesChange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Properties') }})
    
