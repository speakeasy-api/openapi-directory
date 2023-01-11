import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SalesTax:
    r"""SalesTax
    The applicable sales tax rate, as a percentage of the sale amount, for a given country and sales tax jurisdiction within that country.
    """
    
    country_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    sales_tax_jurisdiction_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salesTaxJurisdictionId') }})
    sales_tax_percentage: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salesTaxPercentage') }})
    shipping_and_handling_taxed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingAndHandlingTaxed') }})
    
