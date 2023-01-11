import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OrderIdentifierWithETag:
    account_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    beez_up_order_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPOrderId') }})
    etag: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    marketplace_technical_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceTechnicalCode') }})
    
