import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_getlegacytrackingchannelcatalogslink as shared_links_getlegacytrackingchannelcatalogslink


@dataclass_json
@dataclasses.dataclass
class LegacyTrackingChannelCatalogListLinks:
    r"""LegacyTrackingChannelCatalogListLinks
    Indicates how global actions you can do like how to create a channel catalog, exclusion filter operators, etc...
    
    """
    
    self: Optional[shared_links_getlegacytrackingchannelcatalogslink.LinksGetLegacyTrackingChannelCatalogsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
