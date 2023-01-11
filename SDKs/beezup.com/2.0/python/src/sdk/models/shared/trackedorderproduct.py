import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TrackedOrderProduct:
    r"""TrackedOrderProduct
    The basic information related to a product
    """
    
    margin: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('margin') }})
    product_exists: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productExists') }})
    product_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    product_image_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productImageUrl') }})
    product_sku: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productSku') }})
    product_title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productTitle') }})
    quantity: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    unit_price: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unitPrice') }})
    
