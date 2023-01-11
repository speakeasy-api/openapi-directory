import dataclasses
from enum import Enum
from ..shared import receiptfilterpolicy_enum as shared_receiptfilterpolicy_enum


@dataclasses.dataclass
class ReceiptIPFilter:
    r"""ReceiptIPFilter
    <p>A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.</p> <p>For information about setting up IP address filters, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html\">Amazon SES Developer Guide</a>.</p>
    """
    
    cidr: str = dataclasses.field()
    policy: shared_receiptfilterpolicy_enum.ReceiptFilterPolicyEnum = dataclasses.field()
    
