import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import marketplacechannelcataloglistlinks as shared_marketplacechannelcataloglistlinks
from ..shared import marketplacechannelcatalog as shared_marketplacechannelcatalog


@dataclass_json
@dataclasses.dataclass
class MarketplaceChannelCatalogList:
    r"""MarketplaceChannelCatalogList
    The marketplace channel catalog list
    """
    
    links: shared_marketplacechannelcataloglistlinks.MarketplaceChannelCatalogListLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    marketplace_channel_catalogs: list[shared_marketplacechannelcatalog.MarketplaceChannelCatalog] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceChannelCatalogs') }})
    
