import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DescribeHsmRequest:
    r"""DescribeHsmRequest
    Contains the inputs for the <a>DescribeHsm</a> operation.
    """
    
    hsm_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HsmArn') }})
    hsm_serial_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HsmSerialNumber') }})
    
