import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ReportTaskProgressOutput:
    r"""ReportTaskProgressOutput
    Contains the output of ReportTaskProgress.
    """
    
    canceled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('canceled') }})
    
