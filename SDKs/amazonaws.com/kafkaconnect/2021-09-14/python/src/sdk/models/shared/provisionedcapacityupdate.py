import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ProvisionedCapacityUpdate:
    r"""ProvisionedCapacityUpdate
    An update to a connector's fixed capacity.
    """
    
    mcu_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcuCount') }})
    worker_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerCount') }})
    
