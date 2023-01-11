import dataclasses
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_paginationresult as shared_beezup_common_paginationresult


@dataclass_json
@dataclasses.dataclass
class ProductList:
    pagination_result: shared_beezup_common_paginationresult.BeezUpCommonPaginationResult = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('paginationResult') }})
    products: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    
