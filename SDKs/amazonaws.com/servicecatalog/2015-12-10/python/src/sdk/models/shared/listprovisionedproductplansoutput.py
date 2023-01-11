import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provisionedproductplansummary as shared_provisionedproductplansummary


@dataclass_json
@dataclasses.dataclass
class ListProvisionedProductPlansOutput:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    provisioned_product_plans: Optional[list[shared_provisionedproductplansummary.ProvisionedProductPlanSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedProductPlans') }})
    
