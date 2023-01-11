import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_configurechannelcatalogexclusionfilterslink as shared_links_configurechannelcatalogexclusionfilterslink
from ..shared import links_getchannelcatalogexclusionfilterslink as shared_links_getchannelcatalogexclusionfilterslink


@dataclass_json
@dataclasses.dataclass
class ExclusionFiltersResponseLinks:
    self: shared_links_getchannelcatalogexclusionfilterslink.LinksGetChannelCatalogExclusionFiltersLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    configure: Optional[shared_links_configurechannelcatalogexclusionfilterslink.LinksConfigureChannelCatalogExclusionFiltersLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configure') }})
    
