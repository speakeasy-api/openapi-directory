import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customermanagedchannels3storagesummary as shared_customermanagedchannels3storagesummary


@dataclass_json
@dataclasses.dataclass
class ChannelStorageSummary:
    r"""ChannelStorageSummary
    Where channel data is stored.
    """
    
    customer_managed_s3: Optional[shared_customermanagedchannels3storagesummary.CustomerManagedChannelS3StorageSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManagedS3') }})
    service_managed_s3: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceManagedS3') }})
    
