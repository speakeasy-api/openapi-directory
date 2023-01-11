import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_migratelegacytrackingchannelcataloglink as shared_links_migratelegacytrackingchannelcataloglink
from ..shared import links_getlegacytrackingchannelcataloglink as shared_links_getlegacytrackingchannelcataloglink


@dataclass_json
@dataclasses.dataclass
class LegacyTrackingChannelCatalogLinks:
    r"""LegacyTrackingChannelCatalogLinks
    Indicates the actions you can do on a channel catalog
    """
    
    self: shared_links_getlegacytrackingchannelcataloglink.LinksGetLegacyTrackingChannelCatalogLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    migrate: Optional[shared_links_migratelegacytrackingchannelcataloglink.LinksMigrateLegacyTrackingChannelCatalogLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('migrate') }})
    
