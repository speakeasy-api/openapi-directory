import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import productinformationfilter as shared_productinformationfilter


@dataclass_json
@dataclasses.dataclass
class ProductInformation:
    r"""ProductInformation
    Describes product information for a license configuration.
    """
    
    product_information_filter_list: list[shared_productinformationfilter.ProductInformationFilter] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductInformationFilterList') }})
    resource_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    
