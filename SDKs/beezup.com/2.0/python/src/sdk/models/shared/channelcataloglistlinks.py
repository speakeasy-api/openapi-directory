import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_addchannelcataloglink as shared_links_addchannelcataloglink
from ..shared import externallinks_catalog_getbeezupcolumnslink as shared_externallinks_catalog_getbeezupcolumnslink
from ..shared import links_getchannelcatalogfilteroperatorslink as shared_links_getchannelcatalogfilteroperatorslink
from ..shared import links_getchannelcatalogslink as shared_links_getchannelcatalogslink


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogListLinks:
    r"""ChannelCatalogListLinks
    Indicates how global actions you can do like how to create a channel catalog, exclusion filter operators, etc...
    
    """
    
    add: Optional[shared_links_addchannelcataloglink.LinksAddChannelCatalogLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    beez_up_columns: Optional[shared_externallinks_catalog_getbeezupcolumnslink.ExternalLinksCatalogGetBeezUpColumnsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPColumns') }})
    filter_operators: Optional[shared_links_getchannelcatalogfilteroperatorslink.LinksGetChannelCatalogFilterOperatorsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterOperators') }})
    self: Optional[shared_links_getchannelcatalogslink.LinksGetChannelCatalogsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
