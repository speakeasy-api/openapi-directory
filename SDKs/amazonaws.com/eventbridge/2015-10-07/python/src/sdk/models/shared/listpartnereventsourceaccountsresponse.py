import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import partnereventsourceaccount as shared_partnereventsourceaccount


@dataclass_json
@dataclasses.dataclass
class ListPartnerEventSourceAccountsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    partner_event_source_accounts: Optional[list[shared_partnereventsourceaccount.PartnerEventSourceAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartnerEventSourceAccounts') }})
    
