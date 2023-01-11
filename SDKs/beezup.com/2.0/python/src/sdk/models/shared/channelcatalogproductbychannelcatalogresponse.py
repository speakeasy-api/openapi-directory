import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelcatalogproductinfo as shared_channelcatalogproductinfo


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogProductByChannelCatalogResponse:
    channel_catalogs: Optional[dict[str, shared_channelcatalogproductinfo.ChannelCatalogProductInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCatalogs') }})
    
