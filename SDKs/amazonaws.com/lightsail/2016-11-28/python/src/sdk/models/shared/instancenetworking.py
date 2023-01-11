import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import monthlytransfer as shared_monthlytransfer
from ..shared import instanceportinfo as shared_instanceportinfo


@dataclass_json
@dataclasses.dataclass
class InstanceNetworking:
    r"""InstanceNetworking
    Describes monthly data transfer rates and port information for an instance.
    """
    
    monthly_transfer: Optional[shared_monthlytransfer.MonthlyTransfer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthlyTransfer') }})
    ports: Optional[list[shared_instanceportinfo.InstancePortInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ports') }})
    
