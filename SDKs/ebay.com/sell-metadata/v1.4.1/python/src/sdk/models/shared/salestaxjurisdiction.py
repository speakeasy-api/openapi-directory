import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SalesTaxJurisdiction:
    r"""SalesTaxJurisdiction
    A unique ID for a sales tax jurisdiction.
    """
    
    sales_tax_jurisdiction_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salesTaxJurisdictionId') }})
    
