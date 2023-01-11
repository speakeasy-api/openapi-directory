import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_exportchannelcatalogproductinfolistlink as shared_links_exportchannelcatalogproductinfolistlink
from ..shared import links_getchannelcatalogproductinfolistlink as shared_links_getchannelcatalogproductinfolistlink


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogProductInfoListLinks:
    self: shared_links_getchannelcatalogproductinfolistlink.LinksGetChannelCatalogProductInfoListLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    export: Optional[shared_links_exportchannelcatalogproductinfolistlink.LinksExportChannelCatalogProductInfoListLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('export') }})
    
