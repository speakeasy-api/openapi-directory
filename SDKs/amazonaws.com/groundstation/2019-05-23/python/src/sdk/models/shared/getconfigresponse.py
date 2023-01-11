import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configtypedata as shared_configtypedata
from ..shared import configcapabilitytype_enum as shared_configcapabilitytype_enum


@dataclass_json
@dataclasses.dataclass
class GetConfigResponse:
    r"""GetConfigResponse
    <p/>
    """
    
    config_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configArn') }})
    config_data: shared_configtypedata.ConfigTypeData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configData') }})
    config_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configId') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    config_type: Optional[shared_configcapabilitytype_enum.ConfigCapabilityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configType') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
