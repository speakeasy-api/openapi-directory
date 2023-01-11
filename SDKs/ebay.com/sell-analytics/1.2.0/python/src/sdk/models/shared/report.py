import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metadata as shared_metadata
from ..shared import header as shared_header
from ..shared import record as shared_record
from ..shared import error as shared_error


@dataclass_json
@dataclasses.dataclass
class Report:
    r"""Report
    The complex type that defines that defines the report.
    """
    
    dimension_metadata: Optional[list[shared_metadata.Metadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionMetadata') }})
    end_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    header: Optional[shared_header.Header] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    last_updated_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedDate') }})
    records: Optional[list[shared_record.Record]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    start_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    warnings: Optional[list[shared_error.Error]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
