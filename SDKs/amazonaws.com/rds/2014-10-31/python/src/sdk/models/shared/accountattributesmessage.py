import dataclasses
from typing import Optional
from ..shared import accountquotalist as shared_accountquotalist


@dataclasses.dataclass
class AccountAttributesMessage:
    r"""AccountAttributesMessage
    Data returned by the <b>DescribeAccountAttributes</b> action.
    """
    
    account_quotas: Optional[list[shared_accountquotalist.AccountQuotaList]] = dataclasses.field(default=None)
    
