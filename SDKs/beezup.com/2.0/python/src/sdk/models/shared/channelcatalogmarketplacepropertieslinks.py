import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_link3 as shared_beezup_common_link3
from ..shared import links_getchannelcatalogmarketplacepropertieslink as shared_links_getchannelcatalogmarketplacepropertieslink
from ..shared import links_getchannelcatalogmarketplacesettingslink as shared_links_getchannelcatalogmarketplacesettingslink


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogMarketplacePropertiesLinks:
    self: shared_links_getchannelcatalogmarketplacepropertieslink.LinksGetChannelCatalogMarketplacePropertiesLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    external_configuration_page: Optional[shared_beezup_common_link3.BeezUpCommonLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalConfigurationPage') }})
    settings: Optional[shared_links_getchannelcatalogmarketplacesettingslink.LinksGetChannelCatalogMarketplaceSettingsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
