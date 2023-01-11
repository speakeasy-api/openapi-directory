import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OrderIdentifier:
    account_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    beez_up_order_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPOrderId') }})
    marketplace_technical_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceTechnicalCode') }})
    
