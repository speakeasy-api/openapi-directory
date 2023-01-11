import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcegroup as shared_resourcegroup


@dataclass_json
@dataclasses.dataclass
class Integrations:
    r"""Integrations
     The information about the service integration.
    """
    
    resource_group: Optional[shared_resourcegroup.ResourceGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceGroup') }})
    
