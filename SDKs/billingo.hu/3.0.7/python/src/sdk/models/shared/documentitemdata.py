import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DocumentItemData:
    product_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_id') }})
    quantity: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    
