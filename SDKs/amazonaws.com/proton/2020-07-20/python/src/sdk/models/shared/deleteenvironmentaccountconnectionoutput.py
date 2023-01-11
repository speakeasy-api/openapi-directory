import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environmentaccountconnection as shared_environmentaccountconnection


@dataclass_json
@dataclasses.dataclass
class DeleteEnvironmentAccountConnectionOutput:
    environment_account_connection: Optional[shared_environmentaccountconnection.EnvironmentAccountConnection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentAccountConnection') }})
    
