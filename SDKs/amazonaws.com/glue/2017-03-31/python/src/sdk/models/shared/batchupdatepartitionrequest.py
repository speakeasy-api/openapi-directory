import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchupdatepartitionrequestentry as shared_batchupdatepartitionrequestentry


@dataclass_json
@dataclasses.dataclass
class BatchUpdatePartitionRequest:
    database_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    entries: list[shared_batchupdatepartitionrequestentry.BatchUpdatePartitionRequestEntry] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entries') }})
    table_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    catalog_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    
