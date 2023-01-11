import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import automatictransitioninfolinks as shared_automatictransitioninfolinks


@dataclass_json
@dataclasses.dataclass
class AutomaticTransitionInfo:
    account_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    beez_up_order_status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPOrderStatus') }})
    business_operation_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessOperationType') }})
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    marketplace_business_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceBusinessCode') }})
    marketplace_technical_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceTechnicalCode') }})
    order_status_transition_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderStatusTransitionId') }})
    links: Optional[shared_automatictransitioninfolinks.AutomaticTransitionInfoLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
