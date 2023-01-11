import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import networkheader as shared_networkheader


@dataclass_json
@dataclasses.dataclass
class NetworkPathComponent:
    r"""NetworkPathComponent
    Information about a network path component.
    """
    
    component_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComponentId') }})
    component_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComponentType') }})
    egress: Optional[shared_networkheader.NetworkHeader] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Egress') }})
    ingress: Optional[shared_networkheader.NetworkHeader] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ingress') }})
    
