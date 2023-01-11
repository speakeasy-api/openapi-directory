import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import columnstatisticserror as shared_columnstatisticserror


@dataclass_json
@dataclasses.dataclass
class UpdateColumnStatisticsForTableResponse:
    errors: Optional[list[shared_columnstatisticserror.ColumnStatisticsError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    
