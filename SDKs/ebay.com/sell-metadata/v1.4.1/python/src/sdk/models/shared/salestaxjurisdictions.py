import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import salestaxjurisdiction as shared_salestaxjurisdiction


@dataclass_json
@dataclasses.dataclass
class SalesTaxJurisdictions:
    r"""SalesTaxJurisdictions
    This complex type contains a list of sales tax jurisdictions.
    """
    
    sales_tax_jurisdictions: Optional[list[shared_salestaxjurisdiction.SalesTaxJurisdiction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salesTaxJurisdictions') }})
    
