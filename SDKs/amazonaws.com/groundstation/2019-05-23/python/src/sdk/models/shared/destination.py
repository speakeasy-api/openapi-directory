import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configdetails as shared_configdetails
from ..shared import configcapabilitytype_enum as shared_configcapabilitytype_enum


@dataclass_json
@dataclasses.dataclass
class Destination:
    r"""Destination
    Dataflow details for the destination side.
    """
    
    config_details: Optional[shared_configdetails.ConfigDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configDetails') }})
    config_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configId') }})
    config_type: Optional[shared_configcapabilitytype_enum.ConfigCapabilityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configType') }})
    dataflow_destination_region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataflowDestinationRegion') }})
    
