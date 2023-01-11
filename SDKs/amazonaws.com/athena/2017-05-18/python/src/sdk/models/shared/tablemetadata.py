import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import column as shared_column


@dataclass_json
@dataclasses.dataclass
class TableMetadata:
    r"""TableMetadata
    Contains metadata for a table.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    columns: Optional[list[shared_column.Column]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Columns') }})
    create_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_access_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastAccessTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    parameters: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    partition_keys: Optional[list[shared_column.Column]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionKeys') }})
    table_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableType') }})
    
