import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RdsDatabase:
    r"""RdsDatabase
    The database details of an Amazon RDS database.
    """
    
    database_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    instance_identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceIdentifier') }})
    
