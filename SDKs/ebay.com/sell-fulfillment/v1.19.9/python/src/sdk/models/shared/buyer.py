import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taxaddress as shared_taxaddress
from ..shared import taxidentifier as shared_taxidentifier


@dataclass_json
@dataclasses.dataclass
class Buyer:
    r"""Buyer
    This type contains information about the order's buyer.
    """
    
    tax_address: Optional[shared_taxaddress.TaxAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxAddress') }})
    tax_identifier: Optional[shared_taxidentifier.TaxIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxIdentifier') }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
