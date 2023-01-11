import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class InvokeScreenAutomationResult:
    workbook_cursor: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workbookCursor') }})
    
