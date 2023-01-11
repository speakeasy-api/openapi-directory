import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TimestreamTimestamp:
    r"""TimestreamTimestamp
    Describes how to interpret an application-defined timestamp value from an MQTT message payload and the precision of that value.
    """
    
    unit: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
