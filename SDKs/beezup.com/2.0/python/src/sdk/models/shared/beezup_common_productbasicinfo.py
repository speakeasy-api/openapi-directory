import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BeezUpCommonProductBasicInfo:
    r"""BeezUpCommonProductBasicInfo
    The basic information related to a product
    """
    
    product_exists: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productExists') }})
    product_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    product_sku: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productSku') }})
    product_title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productTitle') }})
    product_image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productImageUrl') }})
    
