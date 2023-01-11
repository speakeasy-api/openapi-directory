import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_getchannelcatalogmarketplacepropertieslink as shared_links_getchannelcatalogmarketplacepropertieslink
from ..shared import links_getpublicationslink as shared_links_getpublicationslink
from ..shared import marketplacechannelcatalogpublicationoption as shared_marketplacechannelcatalogpublicationoption
from ..shared import links_getchannelcatalogmarketplacesettingslink as shared_links_getchannelcatalogmarketplacesettingslink


@dataclass_json
@dataclasses.dataclass
class MarketplaceChannelCatalogLinks:
    r"""MarketplaceChannelCatalogLinks
    Indicate the actions you can do on a channel catalog. If the settings are valid, you will be able to access to the publication history.
    """
    
    properties: shared_links_getchannelcatalogmarketplacepropertieslink.LinksGetChannelCatalogMarketplacePropertiesLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    settings: shared_links_getchannelcatalogmarketplacesettingslink.LinksGetChannelCatalogMarketplaceSettingsLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    publications: Optional[shared_links_getpublicationslink.LinksGetPublicationsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publications') }})
    publish_options: Optional[list[shared_marketplacechannelcatalogpublicationoption.MarketplaceChannelCatalogPublicationOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishOptions') }})
    
