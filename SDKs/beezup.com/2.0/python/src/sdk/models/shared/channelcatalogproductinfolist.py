import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelcatalogproductinfolistlinks as shared_channelcatalogproductinfolistlinks
from ..shared import beezup_common_paginationresult as shared_beezup_common_paginationresult
from ..shared import channelcatalogproductinfo as shared_channelcatalogproductinfo


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogProductInfoList:
    r"""ChannelCatalogProductInfoList
    The channel catalog product info list
    """
    
    links: shared_channelcatalogproductinfolistlinks.ChannelCatalogProductInfoListLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    pagination_result: shared_beezup_common_paginationresult.BeezUpCommonPaginationResult = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('paginationResult') }})
    product_infos: list[shared_channelcatalogproductinfo.ChannelCatalogProductInfo] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productInfos') }})
    
