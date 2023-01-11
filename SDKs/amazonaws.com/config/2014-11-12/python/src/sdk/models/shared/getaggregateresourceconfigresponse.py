import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configurationitem as shared_configurationitem


@dataclass_json
@dataclasses.dataclass
class GetAggregateResourceConfigResponse:
    configuration_item: Optional[shared_configurationitem.ConfigurationItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationItem') }})
    
