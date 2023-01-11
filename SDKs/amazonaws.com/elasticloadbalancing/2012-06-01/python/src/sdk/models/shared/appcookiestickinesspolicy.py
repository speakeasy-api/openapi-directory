import dataclasses
from typing import Optional


@dataclasses.dataclass
class AppCookieStickinessPolicy:
    r"""AppCookieStickinessPolicy
    Information about a policy for application-controlled session stickiness.
    """
    
    cookie_name: Optional[str] = dataclasses.field(default=None)
    policy_name: Optional[str] = dataclasses.field(default=None)
    
