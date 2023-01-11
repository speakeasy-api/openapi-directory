import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import networkpathcomponentdetails as shared_networkpathcomponentdetails


@dataclass_json
@dataclasses.dataclass
class NetworkHeader:
    r"""NetworkHeader
    Details about a network path component that occurs before or after the current component.
    """
    
    destination: Optional[shared_networkpathcomponentdetails.NetworkPathComponentDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destination') }})
    protocol: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocol') }})
    source: Optional[shared_networkpathcomponentdetails.NetworkPathComponentDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    
