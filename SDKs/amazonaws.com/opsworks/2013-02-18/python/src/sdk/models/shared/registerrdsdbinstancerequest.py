import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RegisterRdsDbInstanceRequest:
    db_password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbPassword') }})
    db_user: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbUser') }})
    rds_db_instance_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RdsDbInstanceArn') }})
    stack_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackId') }})
    
