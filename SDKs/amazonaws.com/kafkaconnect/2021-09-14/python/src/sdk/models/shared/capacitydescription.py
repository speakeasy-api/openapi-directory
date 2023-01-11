import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autoscalingdescription as shared_autoscalingdescription
from ..shared import provisionedcapacitydescription as shared_provisionedcapacitydescription


@dataclass_json
@dataclasses.dataclass
class CapacityDescription:
    r"""CapacityDescription
    A description of the connector's capacity.
    """
    
    auto_scaling: Optional[shared_autoscalingdescription.AutoScalingDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScaling') }})
    provisioned_capacity: Optional[shared_provisionedcapacitydescription.ProvisionedCapacityDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisionedCapacity') }})
    
