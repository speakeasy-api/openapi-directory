import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_clearchannelcatalogexportationcachelink as shared_links_clearchannelcatalogexportationcachelink
from ..shared import links_getchannelcatalogexportationcacheinfolink as shared_links_getchannelcatalogexportationcacheinfolink


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogExportCacheInfoResponseLinks:
    self: shared_links_getchannelcatalogexportationcacheinfolink.LinksGetChannelCatalogExportationCacheInfoLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    clear: Optional[shared_links_clearchannelcatalogexportationcachelink.LinksClearChannelCatalogExportationCacheLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clear') }})
    
