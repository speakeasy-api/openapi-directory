import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configcapabilitytype_enum as shared_configcapabilitytype_enum


@dataclass_json
@dataclasses.dataclass
class ConfigIDResponse:
    r"""ConfigIDResponse
    <p/>
    """
    
    config_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configArn') }})
    config_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configId') }})
    config_type: Optional[shared_configcapabilitytype_enum.ConfigCapabilityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configType') }})
    
