import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deviceservicename_enum as shared_deviceservicename_enum
from ..shared import transferoption_enum as shared_transferoption_enum


@dataclass_json
@dataclasses.dataclass
class TargetOnDeviceService:
    r"""TargetOnDeviceService
    An object that represents the service or services on the Snow Family device that your transferred data will be exported from or imported into. AWS Snow Family supports Amazon S3 and NFS (Network File System).
    """
    
    service_name: Optional[shared_deviceservicename_enum.DeviceServiceNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceName') }})
    transfer_option: Optional[shared_transferoption_enum.TransferOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransferOption') }})
    
