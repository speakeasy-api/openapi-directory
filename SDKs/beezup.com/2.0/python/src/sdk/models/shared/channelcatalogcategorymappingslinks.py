import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_disablechannelcatalogcategorymappinglink as shared_links_disablechannelcatalogcategorymappinglink
from ..shared import links_reenablechannelcatalogcategorymappinglink as shared_links_reenablechannelcatalogcategorymappinglink
from ..shared import links_getchannelcatalogcategorieslink as shared_links_getchannelcatalogcategorieslink


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogCategoryMappingsLinks:
    r"""ChannelCatalogCategoryMappingsLinks
    The action you can do on the category mappings
    """
    
    self: shared_links_getchannelcatalogcategorieslink.LinksGetChannelCatalogCategoriesLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    disable: Optional[shared_links_disablechannelcatalogcategorymappinglink.LinksDisableChannelCatalogCategoryMappingLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disable') }})
    reenable: Optional[shared_links_reenablechannelcatalogcategorymappinglink.LinksReenableChannelCatalogCategoryMappingLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reenable') }})
    
