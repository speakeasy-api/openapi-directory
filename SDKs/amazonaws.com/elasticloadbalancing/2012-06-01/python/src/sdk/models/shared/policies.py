import dataclasses
from typing import Optional
from ..shared import appcookiestickinesspolicy as shared_appcookiestickinesspolicy
from ..shared import lbcookiestickinesspolicy as shared_lbcookiestickinesspolicy


@dataclasses.dataclass
class Policies:
    r"""Policies
    The policies for a load balancer.
    """
    
    app_cookie_stickiness_policies: Optional[list[shared_appcookiestickinesspolicy.AppCookieStickinessPolicy]] = dataclasses.field(default=None)
    lb_cookie_stickiness_policies: Optional[list[shared_lbcookiestickinesspolicy.LbCookieStickinessPolicy]] = dataclasses.field(default=None)
    other_policies: Optional[list[str]] = dataclasses.field(default=None)
    
