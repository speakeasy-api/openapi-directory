import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import networkoriginconfiguration as shared_networkoriginconfiguration
from ..shared import s3publicaccessblockconfiguration as shared_s3publicaccessblockconfiguration


@dataclass_json
@dataclasses.dataclass
class S3AccessPointConfiguration:
    access_point_policy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPointPolicy') }})
    network_origin: Optional[shared_networkoriginconfiguration.NetworkOriginConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkOrigin') }})
    public_access_block: Optional[shared_s3publicaccessblockconfiguration.S3PublicAccessBlockConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicAccessBlock') }})
    
