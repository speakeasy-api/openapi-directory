import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ScaleOutPolicyUpdate:
    r"""ScaleOutPolicyUpdate
    An update to the connector's scale-out policy.
    """
    
    cpu_utilization_percentage: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuUtilizationPercentage') }})
    
