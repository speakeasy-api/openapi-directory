import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devicetemplate as shared_devicetemplate


@dataclass_json
@dataclasses.dataclass
class PlacementTemplate:
    r"""PlacementTemplate
    An object defining the template for a placement.
    """
    
    default_attributes: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultAttributes') }})
    device_templates: Optional[dict[str, shared_devicetemplate.DeviceTemplate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceTemplates') }})
    
