import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectionstatus_enum as shared_connectionstatus_enum
from ..shared import providertype_enum as shared_providertype_enum


@dataclass_json
@dataclasses.dataclass
class Connection:
    r"""Connection
    <p>A resource that is used to connect third-party source providers with services like AWS CodePipeline.</p> <p>Note: A connection created through CloudFormation, the CLI, or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by updating the connection in the console.</p>
    """
    
    connection_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionArn') }})
    connection_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionName') }})
    connection_status: Optional[shared_connectionstatus_enum.ConnectionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionStatus') }})
    host_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HostArn') }})
    owner_account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerAccountId') }})
    provider_type: Optional[shared_providertype_enum.ProviderTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProviderType') }})
    
