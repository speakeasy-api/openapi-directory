import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import systemresourcelimits as shared_systemresourcelimits


@dataclass_json
@dataclasses.dataclass
class ComponentRunWith:
    r"""ComponentRunWith
    Contains information system user and group that the IoT Greengrass Core software uses to run component processes on the core device. For more information, see <a href=\"https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-user\">Configure the user and group that run components</a> in the <i>IoT Greengrass V2 Developer Guide</i>.
    """
    
    posix_user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posixUser') }})
    system_resource_limits: Optional[shared_systemresourcelimits.SystemResourceLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemResourceLimits') }})
    
