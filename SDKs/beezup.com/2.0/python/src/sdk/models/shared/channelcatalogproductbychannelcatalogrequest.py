import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogProductByChannelCatalogRequest:
    channel_catalog_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCatalogIds') }})
    product_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    store_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeId') }})
    
