import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import retentionproperties as shared_retentionproperties


@dataclass_json
@dataclasses.dataclass
class UpdateTableRequest:
    database_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    retention_properties: shared_retentionproperties.RetentionProperties = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetentionProperties') }})
    table_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    
