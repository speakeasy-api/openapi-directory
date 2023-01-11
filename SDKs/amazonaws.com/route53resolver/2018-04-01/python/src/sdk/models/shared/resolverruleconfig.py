import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import targetaddress as shared_targetaddress


@dataclass_json
@dataclasses.dataclass
class ResolverRuleConfig:
    r"""ResolverRuleConfig
    In an <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html\">UpdateResolverRule</a> request, information about the changes that you want to make.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    resolver_endpoint_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverEndpointId') }})
    target_ips: Optional[list[shared_targetaddress.TargetAddress]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetIps') }})
    
