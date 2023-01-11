import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addonrequest as shared_addonrequest


@dataclass_json
@dataclasses.dataclass
class EnableAddOnRequest:
    add_on_request: shared_addonrequest.AddOnRequest = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('addOnRequest') }})
    resource_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    
