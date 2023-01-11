import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import failedbatchitem as shared_failedbatchitem


@dataclass_json
@dataclasses.dataclass
class BatchUpdateTableRowsResult:
    workbook_cursor: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workbookCursor') }})
    failed_batch_items: Optional[list[shared_failedbatchitem.FailedBatchItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedBatchItems') }})
    
