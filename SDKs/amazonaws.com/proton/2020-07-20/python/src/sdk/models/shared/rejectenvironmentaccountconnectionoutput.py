import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environmentaccountconnection as shared_environmentaccountconnection


@dataclass_json
@dataclasses.dataclass
class RejectEnvironmentAccountConnectionOutput:
    environment_account_connection: shared_environmentaccountconnection.EnvironmentAccountConnection = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentAccountConnection') }})
    
