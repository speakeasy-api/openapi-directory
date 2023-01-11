import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeltaTime:
    r"""DeltaTime
    Used to limit data to that which has arrived since the last execution of the action.
    """
    
    offset_seconds: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offsetSeconds') }})
    time_expression: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeExpression') }})
    
