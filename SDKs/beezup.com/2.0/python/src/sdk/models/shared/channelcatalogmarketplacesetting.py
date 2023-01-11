import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelcatalogmarketplacesettingdiscriminatortype_enum as shared_channelcatalogmarketplacesettingdiscriminatortype_enum


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogMarketplaceSetting:
    r"""ChannelCatalogMarketplaceSetting
    Model for fetching a channel catalog marketplace setting
    """
    
    discriminator_type: shared_channelcatalogmarketplacesettingdiscriminatortype_enum.ChannelCatalogMarketplaceSettingDiscriminatorTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('discriminatorType') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
