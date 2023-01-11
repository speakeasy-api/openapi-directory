import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import flowtemplatesummary as shared_flowtemplatesummary


@dataclass_json
@dataclasses.dataclass
class UpdateFlowTemplateResponse:
    summary: Optional[shared_flowtemplatesummary.FlowTemplateSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    
