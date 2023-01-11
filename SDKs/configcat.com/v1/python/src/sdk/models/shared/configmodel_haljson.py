import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks:
    members: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    products: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    

@dataclass_json
@dataclasses.dataclass
class ConfigModelHaljsonEmbeddedProductEmbeddedOrganization:
    links: Optional[ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    organization_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationId') }})
    

@dataclass_json
@dataclasses.dataclass
class ConfigModelHaljsonEmbeddedProductEmbedded:
    organization: Optional[ConfigModelHaljsonEmbeddedProductEmbeddedOrganization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    

@dataclass_json
@dataclasses.dataclass
class ConfigModelHaljsonEmbeddedProductLinks:
    configs: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    environments: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environments') }})
    members: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    permission_groups: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission-groups') }})
    self: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    tags: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclasses.dataclass
class ConfigModelHaljsonEmbeddedProduct:
    embedded: Optional[ConfigModelHaljsonEmbeddedProductEmbedded] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    links: Optional[ConfigModelHaljsonEmbeddedProductLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    product_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    

@dataclass_json
@dataclasses.dataclass
class ConfigModelHaljsonEmbedded:
    product: Optional[ConfigModelHaljsonEmbeddedProduct] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    

@dataclass_json
@dataclasses.dataclass
class ConfigModelHaljsonLinks:
    self: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    settings: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    

@dataclass_json
@dataclasses.dataclass
class ConfigModelHaljson:
    embedded: Optional[ConfigModelHaljsonEmbedded] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    links: Optional[ConfigModelHaljsonLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    config_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
