import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ScaleInPolicy:
    r"""ScaleInPolicy
    The scale-in policy for the connector.
    """
    
    cpu_utilization_percentage: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuUtilizationPercentage') }})
    
