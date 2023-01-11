import dataclasses
from typing import Optional


@dataclasses.dataclass
class ListVerifiedEmailAddressesResponse:
    r"""ListVerifiedEmailAddressesResponse
    A list of email addresses that you have verified with Amazon SES under your AWS account.
    """
    
    verified_email_addresses: Optional[list[str]] = dataclasses.field(default=None)
    
