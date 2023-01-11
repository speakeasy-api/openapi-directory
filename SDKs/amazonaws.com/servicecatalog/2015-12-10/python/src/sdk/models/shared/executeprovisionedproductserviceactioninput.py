import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ExecuteProvisionedProductServiceActionInput:
    execute_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecuteToken') }})
    provisioned_product_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedProductId') }})
    service_action_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceActionId') }})
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    parameters: Optional[dict[str, list[str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    
