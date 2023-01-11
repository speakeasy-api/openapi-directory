import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import greengrass as shared_greengrass
from ..shared import greengrassv2 as shared_greengrassv2


@dataclass_json
@dataclasses.dataclass
class GatewayPlatform:
    r"""GatewayPlatform
    Contains a gateway's platform information.
    """
    
    greengrass: Optional[shared_greengrass.Greengrass] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('greengrass') }})
    greengrass_v2: Optional[shared_greengrassv2.GreengrassV2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('greengrassV2') }})
    
