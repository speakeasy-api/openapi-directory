import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awselbappcookiestickinesspolicy as shared_awselbappcookiestickinesspolicy
from ..shared import awselblbcookiestickinesspolicy as shared_awselblbcookiestickinesspolicy


@dataclass_json
@dataclasses.dataclass
class AwsElbLoadBalancerPolicies:
    r"""AwsElbLoadBalancerPolicies
    Contains information about the policies for a load balancer.
    """
    
    app_cookie_stickiness_policies: Optional[list[shared_awselbappcookiestickinesspolicy.AwsElbAppCookieStickinessPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppCookieStickinessPolicies') }})
    lb_cookie_stickiness_policies: Optional[list[shared_awselblbcookiestickinesspolicy.AwsElbLbCookieStickinessPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LbCookieStickinessPolicies') }})
    other_policies: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherPolicies') }})
    
