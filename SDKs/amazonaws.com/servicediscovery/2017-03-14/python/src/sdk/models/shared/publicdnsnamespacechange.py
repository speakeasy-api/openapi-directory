import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import publicdnsnamespacepropertieschange as shared_publicdnsnamespacepropertieschange


@dataclass_json
@dataclasses.dataclass
class PublicDNSNamespaceChange:
    r"""PublicDNSNamespaceChange
    Updated properties for the public DNS namespace.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    properties: Optional[shared_publicdnsnamespacepropertieschange.PublicDNSNamespacePropertiesChange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Properties') }})
    
