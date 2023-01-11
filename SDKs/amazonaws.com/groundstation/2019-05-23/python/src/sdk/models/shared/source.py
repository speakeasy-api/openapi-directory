import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configdetails as shared_configdetails
from ..shared import configcapabilitytype_enum as shared_configcapabilitytype_enum


@dataclass_json
@dataclasses.dataclass
class Source:
    r"""Source
    Dataflow details for the source side.
    """
    
    config_details: Optional[shared_configdetails.ConfigDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configDetails') }})
    config_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configId') }})
    config_type: Optional[shared_configcapabilitytype_enum.ConfigCapabilityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configType') }})
    dataflow_source_region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataflowSourceRegion') }})
    
