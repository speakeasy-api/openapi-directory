import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ProductInformationFilter:
    r"""ProductInformationFilter
    Describes product information filters.
    """
    
    product_information_filter_comparator: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductInformationFilterComparator') }})
    product_information_filter_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductInformationFilterName') }})
    product_information_filter_value: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductInformationFilterValue') }})
    
