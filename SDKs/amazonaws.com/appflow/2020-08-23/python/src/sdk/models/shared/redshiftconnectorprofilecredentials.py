import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RedshiftConnectorProfileCredentials:
    r"""RedshiftConnectorProfileCredentials
     The connector-specific profile credentials required when using Amazon Redshift. 
    """
    
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
