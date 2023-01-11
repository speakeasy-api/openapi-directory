import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customermanagedchannels3storage as shared_customermanagedchannels3storage


@dataclass_json
@dataclasses.dataclass
class ChannelStorage:
    r"""ChannelStorage
    Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel.
    """
    
    customer_managed_s3: Optional[shared_customermanagedchannels3storage.CustomerManagedChannelS3Storage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManagedS3') }})
    service_managed_s3: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceManagedS3') }})
    
