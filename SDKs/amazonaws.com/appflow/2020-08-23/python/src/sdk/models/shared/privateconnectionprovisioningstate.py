import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import privateconnectionprovisioningfailurecause_enum as shared_privateconnectionprovisioningfailurecause_enum
from ..shared import privateconnectionprovisioningstatus_enum as shared_privateconnectionprovisioningstatus_enum


@dataclass_json
@dataclasses.dataclass
class PrivateConnectionProvisioningState:
    r"""PrivateConnectionProvisioningState
     Specifies the private connection provisioning state. 
    """
    
    failure_cause: Optional[shared_privateconnectionprovisioningfailurecause_enum.PrivateConnectionProvisioningFailureCauseEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCause') }})
    failure_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureMessage') }})
    status: Optional[shared_privateconnectionprovisioningstatus_enum.PrivateConnectionProvisioningStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
