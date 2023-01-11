import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_disablechannelcatalogproductlink as shared_links_disablechannelcatalogproductlink
from ..shared import links_overridechannelcatalogproductvalueslink as shared_links_overridechannelcatalogproductvalueslink
from ..shared import links_reenablechannelcatalogproductlink as shared_links_reenablechannelcatalogproductlink
from ..shared import links_getchannelcatalogproductinfolink as shared_links_getchannelcatalogproductinfolink


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogProductInfoLinks:
    r"""ChannelCatalogProductInfoLinks
    Indicates the differents actions you can do on a channel product
    """
    
    override: shared_links_overridechannelcatalogproductvalueslink.LinksOverrideChannelCatalogProductValuesLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('override') }})
    self: shared_links_getchannelcatalogproductinfolink.LinksGetChannelCatalogProductInfoLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    disable: Optional[shared_links_disablechannelcatalogproductlink.LinksDisableChannelCatalogProductLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disable') }})
    reenable: Optional[shared_links_reenablechannelcatalogproductlink.LinksReenableChannelCatalogProductLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reenable') }})
    
