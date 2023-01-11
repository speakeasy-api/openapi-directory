import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TestReportSummary:
    r"""TestReportSummary
     Information about a test report. 
    """
    
    duration_in_nano_seconds: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationInNanoSeconds') }})
    status_counts: dict[str, int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusCounts') }})
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
