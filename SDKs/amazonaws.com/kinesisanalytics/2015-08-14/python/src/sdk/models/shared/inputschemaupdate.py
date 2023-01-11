import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recordcolumn as shared_recordcolumn
from ..shared import recordformat as shared_recordformat


@dataclass_json
@dataclasses.dataclass
class InputSchemaUpdate:
    r"""InputSchemaUpdate
    Describes updates for the application's input schema.
    """
    
    record_column_updates: Optional[list[shared_recordcolumn.RecordColumn]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordColumnUpdates') }})
    record_encoding_update: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordEncodingUpdate') }})
    record_format_update: Optional[shared_recordformat.RecordFormat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordFormatUpdate') }})
    
