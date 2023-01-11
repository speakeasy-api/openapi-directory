import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_getmarketplacechannelcatalogslink as shared_links_getmarketplacechannelcatalogslink


@dataclass_json
@dataclasses.dataclass
class MarketplaceChannelCatalogListLinks:
    self: shared_links_getmarketplacechannelcatalogslink.LinksGetMarketplaceChannelCatalogsLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
