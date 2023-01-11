import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_infosummaries as shared_beezup_common_infosummaries
from ..shared import channelcatalogmarketplacepropertieslinks as shared_channelcatalogmarketplacepropertieslinks


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogMarketplaceProperties:
    links: shared_channelcatalogmarketplacepropertieslinks.ChannelCatalogMarketplacePropertiesLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    property_groups: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyGroups') }})
    info: Optional[shared_beezup_common_infosummaries.BeezUpCommonInfoSummaries] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    
