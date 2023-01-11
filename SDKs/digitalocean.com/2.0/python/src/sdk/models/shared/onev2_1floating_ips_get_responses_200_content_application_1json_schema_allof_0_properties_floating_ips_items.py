import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItemsRegion:
    r"""Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItemsRegion
    The region that the floating IP is reserved to. When you query a floating IP, the entire region object will be returned.
    """
    
    available: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('available') }})
    features: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sizes: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizes') }})
    slug: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItems:
    droplet: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('droplet') }})
    ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    locked: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    region: Optional[Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItemsRegion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    
