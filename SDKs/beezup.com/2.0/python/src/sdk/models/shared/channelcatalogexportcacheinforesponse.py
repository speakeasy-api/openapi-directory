import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelcatalogexportcacheinfo as shared_channelcatalogexportcacheinfo
from ..shared import channelcatalogexportcacheinforesponselinks as shared_channelcatalogexportcacheinforesponselinks


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogExportCacheInfoResponse:
    cache_info: shared_channelcatalogexportcacheinfo.ChannelCatalogExportCacheInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheInfo') }})
    links: shared_channelcatalogexportcacheinforesponselinks.ChannelCatalogExportCacheInfoResponseLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
