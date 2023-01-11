import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rdsdbinstance as shared_rdsdbinstance


@dataclass_json
@dataclasses.dataclass
class DescribeRdsDbInstancesResult:
    r"""DescribeRdsDbInstancesResult
    Contains the response to a <code>DescribeRdsDbInstances</code> request.
    """
    
    rds_db_instances: Optional[list[shared_rdsdbinstance.RdsDbInstance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RdsDbInstances') }})
    
