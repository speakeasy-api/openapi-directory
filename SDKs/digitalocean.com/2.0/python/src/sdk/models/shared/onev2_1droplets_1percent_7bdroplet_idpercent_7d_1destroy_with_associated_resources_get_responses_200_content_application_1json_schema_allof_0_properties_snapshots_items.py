import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Onev21droplets1Percent7BdropletIDPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems:
    r"""Onev21droplets1Percent7BdropletIDPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems
    An objects containing information about a resource associated with a Droplet.
    """
    
    cost: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
