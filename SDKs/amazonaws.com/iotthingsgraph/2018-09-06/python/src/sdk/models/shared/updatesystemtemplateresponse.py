import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import systemtemplatesummary as shared_systemtemplatesummary


@dataclass_json
@dataclasses.dataclass
class UpdateSystemTemplateResponse:
    summary: Optional[shared_systemtemplatesummary.SystemTemplateSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    
