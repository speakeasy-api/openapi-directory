import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SalesTaxBase:
    r"""SalesTaxBase
    A container that describes the how the sales tax rate is calculated.
    """
    
    sales_tax_percentage: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salesTaxPercentage') }})
    shipping_and_handling_taxed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingAndHandlingTaxed') }})
    
