import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import elasticip as shared_elasticip


@dataclass_json
@dataclasses.dataclass
class DescribeElasticIpsResult:
    r"""DescribeElasticIpsResult
    Contains the response to a <code>DescribeElasticIps</code> request.
    """
    
    elastic_ips: Optional[list[shared_elasticip.ElasticIP]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticIps') }})
    
