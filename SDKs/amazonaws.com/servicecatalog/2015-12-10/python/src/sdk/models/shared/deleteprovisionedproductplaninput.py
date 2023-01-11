import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteProvisionedProductPlanInput:
    plan_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlanId') }})
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    ignore_errors: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IgnoreErrors') }})
    
