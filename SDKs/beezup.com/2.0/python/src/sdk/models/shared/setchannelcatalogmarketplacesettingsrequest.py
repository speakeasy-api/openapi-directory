import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelcatalogmarketplacesetting as shared_channelcatalogmarketplacesetting


@dataclass_json
@dataclasses.dataclass
class SetChannelCatalogMarketplaceSettingsRequest:
    r"""SetChannelCatalogMarketplaceSettingsRequest
    The channel catalog marketplace settings to save
    """
    
    settings: list[shared_channelcatalogmarketplacesetting.ChannelCatalogMarketplaceSetting] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
