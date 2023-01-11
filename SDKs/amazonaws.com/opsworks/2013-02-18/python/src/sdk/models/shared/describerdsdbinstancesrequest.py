import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DescribeRdsDbInstancesRequest:
    stack_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackId') }})
    rds_db_instance_arns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RdsDbInstanceArns') }})
    
