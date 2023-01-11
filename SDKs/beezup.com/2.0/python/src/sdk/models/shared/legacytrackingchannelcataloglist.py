import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import legacytrackingchannelcatalog as shared_legacytrackingchannelcatalog
from ..shared import legacytrackingchannelcataloglistlinks as shared_legacytrackingchannelcataloglistlinks


@dataclass_json
@dataclasses.dataclass
class LegacyTrackingChannelCatalogList:
    r"""LegacyTrackingChannelCatalogList
    This is the index of the channel catalog API
    """
    
    channel_catalogs: Optional[dict[str, shared_legacytrackingchannelcatalog.LegacyTrackingChannelCatalog]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCatalogs') }})
    links: Optional[shared_legacytrackingchannelcataloglistlinks.LegacyTrackingChannelCatalogListLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
