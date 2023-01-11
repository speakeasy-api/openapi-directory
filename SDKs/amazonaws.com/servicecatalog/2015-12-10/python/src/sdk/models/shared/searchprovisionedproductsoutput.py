import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provisionedproductattribute as shared_provisionedproductattribute


@dataclass_json
@dataclasses.dataclass
class SearchProvisionedProductsOutput:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    provisioned_products: Optional[list[shared_provisionedproductattribute.ProvisionedProductAttribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedProducts') }})
    total_results_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalResultsCount') }})
    
