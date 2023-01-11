import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelcatalog as shared_channelcatalog
from ..shared import channelcataloglistlinks as shared_channelcataloglistlinks
from ..shared import channelcataloglistlovlinks as shared_channelcataloglistlovlinks


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogList:
    r"""ChannelCatalogList
    This is the index of the channel catalog API
    """
    
    channel_catalogs: Optional[dict[str, shared_channelcatalog.ChannelCatalog]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCatalogs') }})
    links: Optional[shared_channelcataloglistlinks.ChannelCatalogListLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    lov_links: Optional[shared_channelcataloglistlovlinks.ChannelCatalogListLovLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lovLinks') }})
    
