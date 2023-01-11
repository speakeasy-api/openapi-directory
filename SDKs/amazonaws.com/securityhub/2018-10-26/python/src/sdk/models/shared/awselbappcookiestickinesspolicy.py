import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsElbAppCookieStickinessPolicy:
    r"""AwsElbAppCookieStickinessPolicy
    Contains information about a stickiness policy that was created using <code>CreateAppCookieStickinessPolicy</code>.
    """
    
    cookie_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CookieName') }})
    policy_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyName') }})
    
