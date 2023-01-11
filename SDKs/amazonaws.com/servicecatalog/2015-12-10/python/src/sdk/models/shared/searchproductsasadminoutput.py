import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import productviewdetail as shared_productviewdetail


@dataclass_json
@dataclasses.dataclass
class SearchProductsAsAdminOutput:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    product_view_details: Optional[list[shared_productviewdetail.ProductViewDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductViewDetails') }})
    
