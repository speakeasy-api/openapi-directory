import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ProvisioningHook:
    r"""ProvisioningHook
    Structure that contains <code>payloadVersion</code> and <code>targetArn</code>.
    """
    
    target_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetArn') }})
    payload_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payloadVersion') }})
    
