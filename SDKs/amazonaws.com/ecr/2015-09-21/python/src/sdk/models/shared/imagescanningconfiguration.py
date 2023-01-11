import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ImageScanningConfiguration:
    r"""ImageScanningConfiguration
    The image scanning configuration for a repository.
    """
    
    scan_on_push: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scanOnPush') }})
    
