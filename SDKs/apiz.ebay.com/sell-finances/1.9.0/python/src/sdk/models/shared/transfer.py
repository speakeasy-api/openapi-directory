import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fundingsource as shared_fundingsource
from ..shared import amount as shared_amount
from ..shared import transferdetail as shared_transferdetail


@dataclass_json
@dataclasses.dataclass
class Transfer:
    r"""Transfer
    This type is the base response type used by TRANSFER transaction type that is returned in the response.
    """
    
    funding_source: Optional[shared_fundingsource.FundingSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundingSource') }})
    transaction_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionDate') }})
    transfer_amount: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferAmount') }})
    transfer_detail: Optional[shared_transferdetail.TransferDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferDetail') }})
    transfer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferId') }})
    
