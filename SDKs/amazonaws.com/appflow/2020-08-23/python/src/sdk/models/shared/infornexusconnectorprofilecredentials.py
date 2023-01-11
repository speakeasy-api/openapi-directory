import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class InforNexusConnectorProfileCredentials:
    r"""InforNexusConnectorProfileCredentials
     The connector-specific profile credentials required by Infor Nexus. 
    """
    
    access_key_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessKeyId') }})
    datakey: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datakey') }})
    secret_access_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretAccessKey') }})
    user_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
