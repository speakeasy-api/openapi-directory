import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcedatacontainer as shared_resourcedatacontainer


@dataclass_json
@dataclasses.dataclass
class Resource:
    r"""Resource
    Information about a resource.
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    resource_data_container: shared_resourcedatacontainer.ResourceDataContainer = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceDataContainer') }})
    
