import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loadbalancerattributename_enum as shared_loadbalancerattributename_enum


@dataclass_json
@dataclasses.dataclass
class UpdateLoadBalancerAttributeRequest:
    attribute_name: shared_loadbalancerattributename_enum.LoadBalancerAttributeNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeName') }})
    attribute_value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeValue') }})
    load_balancer_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancerName') }})
    
