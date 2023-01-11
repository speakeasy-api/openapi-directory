import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DetachElasticLoadBalancerRequest:
    elastic_load_balancer_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticLoadBalancerName') }})
    layer_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LayerId') }})
    
