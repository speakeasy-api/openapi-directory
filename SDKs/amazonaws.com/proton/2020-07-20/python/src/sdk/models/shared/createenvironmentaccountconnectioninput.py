import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateEnvironmentAccountConnectionInput:
    environment_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentName') }})
    management_account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('managementAccountId') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    
