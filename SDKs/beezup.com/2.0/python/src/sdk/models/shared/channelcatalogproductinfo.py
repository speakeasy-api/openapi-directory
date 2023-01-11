import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelcatalogproductinfolinks as shared_channelcatalogproductinfolinks
from ..shared import productoverridewithcatalogvalue as shared_productoverridewithcatalogvalue


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogProductInfo:
    r"""ChannelCatalogProductInfo
    The channel catalog product information
    """
    
    disabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    excluded: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('excluded') }})
    links: shared_channelcatalogproductinfolinks.ChannelCatalogProductInfoLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    overrides: dict[str, shared_productoverridewithcatalogvalue.ProductOverrideWithCatalogValue] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrides') }})
    product_exists: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productExists') }})
    product_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    product_sku: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productSku') }})
    product_title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productTitle') }})
    uncategorized: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uncategorized') }})
    excluded_by: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedBy') }})
    product_image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productImageUrl') }})
    
