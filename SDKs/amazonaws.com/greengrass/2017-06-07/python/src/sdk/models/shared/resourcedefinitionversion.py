import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resource as shared_resource


@dataclass_json
@dataclasses.dataclass
class ResourceDefinitionVersion:
    r"""ResourceDefinitionVersion
    Information about a resource definition version.
    """
    
    resources: Optional[list[shared_resource.Resource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    
