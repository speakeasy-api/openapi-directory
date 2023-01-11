import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import elasticloadbalancer as shared_elasticloadbalancer


@dataclass_json
@dataclasses.dataclass
class DescribeElasticLoadBalancersResult:
    r"""DescribeElasticLoadBalancersResult
    Contains the response to a <code>DescribeElasticLoadBalancers</code> request.
    """
    
    elastic_load_balancers: Optional[list[shared_elasticloadbalancer.ElasticLoadBalancer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticLoadBalancers') }})
    
