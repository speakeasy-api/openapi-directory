import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelcatalogmarketplacesettingslinks as shared_channelcatalogmarketplacesettingslinks
from ..shared import channelcatalogmarketplacesetting as shared_channelcatalogmarketplacesetting


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogMarketplaceSettings:
    r"""ChannelCatalogMarketplaceSettings
    The channel catalog marketplace settings
    """
    
    links: shared_channelcatalogmarketplacesettingslinks.ChannelCatalogMarketplaceSettingsLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    settings: list[shared_channelcatalogmarketplacesetting.ChannelCatalogMarketplaceSetting] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
