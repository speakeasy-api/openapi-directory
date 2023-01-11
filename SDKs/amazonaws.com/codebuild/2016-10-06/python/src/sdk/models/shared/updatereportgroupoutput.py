import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportgroup as shared_reportgroup


@dataclass_json
@dataclasses.dataclass
class UpdateReportGroupOutput:
    report_group: Optional[shared_reportgroup.ReportGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportGroup') }})
    
