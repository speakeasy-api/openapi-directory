import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import receipt as shared_receipt


@dataclass_json
@dataclasses.dataclass
class ListPageReceiptsResult:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    receipts: Optional[list[shared_receipt.Receipt]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Receipts') }})
    
