import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelcatalogcategoryconfiguration as shared_channelcatalogcategoryconfiguration


@dataclass_json
@dataclasses.dataclass
class ConfigureCategoryRequest:
    r"""ConfigureCategoryRequest
    The request message to make a mapping between catalog category path and a channel category path
    """
    
    channel_catalog_categories: list[shared_channelcatalogcategoryconfiguration.ChannelCatalogCategoryConfiguration] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCatalogCategories') }})
    override_sub_category_mappings: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrideSubCategoryMappings') }})
    
