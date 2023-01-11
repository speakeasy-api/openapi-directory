import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provisionedproductplandetails as shared_provisionedproductplandetails
from ..shared import resourcechange as shared_resourcechange


@dataclass_json
@dataclasses.dataclass
class DescribeProvisionedProductPlanOutput:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    provisioned_product_plan_details: Optional[shared_provisionedproductplandetails.ProvisionedProductPlanDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedProductPlanDetails') }})
    resource_changes: Optional[list[shared_resourcechange.ResourceChange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceChanges') }})
    
