import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provisionedproductdetail as shared_provisionedproductdetail


@dataclass_json
@dataclasses.dataclass
class ScanProvisionedProductsOutput:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    provisioned_products: Optional[list[shared_provisionedproductdetail.ProvisionedProductDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedProducts') }})
    
