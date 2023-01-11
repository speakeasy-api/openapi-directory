import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ServiceAccountCredentials:
    r"""ServiceAccountCredentials
    Describes the credentials for the service account used by the fleet or image builder to connect to the directory.
    """
    
    account_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountName') }})
    account_password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountPassword') }})
    
