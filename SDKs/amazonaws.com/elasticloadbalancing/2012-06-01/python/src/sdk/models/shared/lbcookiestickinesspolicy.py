import dataclasses
from typing import Optional


@dataclasses.dataclass
class LbCookieStickinessPolicy:
    r"""LbCookieStickinessPolicy
    Information about a policy for duration-based session stickiness.
    """
    
    cookie_expiration_period: Optional[int] = dataclasses.field(default=None)
    policy_name: Optional[str] = dataclasses.field(default=None)
    
