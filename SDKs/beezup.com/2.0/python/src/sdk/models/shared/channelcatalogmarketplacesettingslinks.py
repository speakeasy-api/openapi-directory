import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_setchannelcatalogmarketplacesettingslink as shared_links_setchannelcatalogmarketplacesettingslink
from ..shared import links_getchannelcatalogmarketplacesettingslink as shared_links_getchannelcatalogmarketplacesettingslink


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogMarketplaceSettingsLinks:
    save: shared_links_setchannelcatalogmarketplacesettingslink.LinksSetChannelCatalogMarketplaceSettingsLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('save') }})
    self: shared_links_getchannelcatalogmarketplacesettingslink.LinksGetChannelCatalogMarketplaceSettingsLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
