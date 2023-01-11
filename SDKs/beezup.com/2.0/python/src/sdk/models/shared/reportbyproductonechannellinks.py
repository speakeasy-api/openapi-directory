import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_optimisebyproductlink as shared_links_optimisebyproductlink
from ..shared import links_getchannelcatalogproductinfolink as shared_links_getchannelcatalogproductinfolink


@dataclass_json
@dataclasses.dataclass
class ReportByProductOneChannelLinks:
    r"""ReportByProductOneChannelLinks
    If the report concerned one product for one channel the channel catalog product info will give you all you need to enable or disable the product.
    """
    
    disable_product_for_one_channel: shared_links_optimisebyproductlink.LinksOptimiseByProductLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableProductForOneChannel') }})
    enable_product_for_one_channel: shared_links_optimisebyproductlink.LinksOptimiseByProductLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableProductForOneChannel') }})
    product_info: shared_links_getchannelcatalogproductinfolink.LinksGetChannelCatalogProductInfoLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productInfo') }})
    
