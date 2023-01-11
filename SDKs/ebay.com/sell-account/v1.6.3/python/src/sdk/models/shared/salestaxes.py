import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import salestax as shared_salestax


@dataclass_json
@dataclasses.dataclass
class SalesTaxes:
    r"""SalesTaxes
    A list of sales tax tables.
    """
    
    sales_taxes: Optional[list[shared_salestax.SalesTax]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salesTaxes') }})
    
