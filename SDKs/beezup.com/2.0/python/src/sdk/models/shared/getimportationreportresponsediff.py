import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetImportationReportResponseDiff:
    created_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdCount') }})
    deleted_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedCount') }})
    updated_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedCount') }})
    unchanged_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unchangedCount') }})
    
