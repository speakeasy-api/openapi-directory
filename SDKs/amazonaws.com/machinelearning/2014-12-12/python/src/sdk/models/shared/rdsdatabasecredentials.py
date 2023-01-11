import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RdsDatabaseCredentials:
    r"""RdsDatabaseCredentials
    The database credentials to connect to a database on an RDS DB instance.
    """
    
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    
