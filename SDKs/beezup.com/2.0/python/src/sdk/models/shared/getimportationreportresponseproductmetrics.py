import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetImportationReportResponseProductMetrics:
    active_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeCount') }})
    detected_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedCount') }})
    duplicated_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicatedCount') }})
    failed_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedCount') }})
    
