import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_getchannelcatalogexportationhistorylink as shared_links_getchannelcatalogexportationhistorylink


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogExportationHistoryLinks:
    self: Optional[shared_links_getchannelcatalogexportationhistorylink.LinksGetChannelCatalogExportationHistoryLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
