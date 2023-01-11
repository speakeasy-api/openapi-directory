import dataclasses
from typing import Optional


@dataclasses.dataclass
class PolicyDetail:
    r"""PolicyDetail
    <p>Contains information about an IAM policy, including the policy document.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
    """
    
    policy_document: Optional[str] = dataclasses.field(default=None)
    policy_name: Optional[str] = dataclasses.field(default=None)
    
