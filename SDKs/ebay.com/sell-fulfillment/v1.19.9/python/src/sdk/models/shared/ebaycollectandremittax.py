import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import amount as shared_amount
from ..shared import ebaytaxreference as shared_ebaytaxreference


@dataclass_json
@dataclasses.dataclass
class EbayCollectAndRemitTax:
    r"""EbayCollectAndRemitTax
    This type contains information about the type and amount of tax that eBay will collect and remit to the state, province, country, or other taxing authority in the buyer's location, as required by that taxing authority. 'Collect and Remit' tax includes US state-mandated sales tax, 'Goods and Services' tax in Australia or New Zealand, VAT collected for the UK and EU countries.
    """
    
    amount: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    collection_method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectionMethod') }})
    ebay_reference: Optional[shared_ebaytaxreference.EbayTaxReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ebayReference') }})
    tax_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxType') }})
    
