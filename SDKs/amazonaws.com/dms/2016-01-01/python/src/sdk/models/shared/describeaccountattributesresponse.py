import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountquota as shared_accountquota


@dataclass_json
@dataclasses.dataclass
class DescribeAccountAttributesResponse:
    r"""DescribeAccountAttributesResponse
    <p/>
    """
    
    account_quotas: Optional[list[shared_accountquota.AccountQuota]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountQuotas') }})
    unique_account_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UniqueAccountIdentifier') }})
    
