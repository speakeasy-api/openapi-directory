import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import greenfleetprovisioningaction_enum as shared_greenfleetprovisioningaction_enum


@dataclass_json
@dataclasses.dataclass
class GreenFleetProvisioningOption:
    r"""GreenFleetProvisioningOption
    Information about the instances that belong to the replacement environment in a blue/green deployment.
    """
    
    action: Optional[shared_greenfleetprovisioningaction_enum.GreenFleetProvisioningActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    
