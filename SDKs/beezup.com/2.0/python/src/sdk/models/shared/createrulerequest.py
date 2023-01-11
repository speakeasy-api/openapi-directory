import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import optimisationactionname_enum as shared_optimisationactionname_enum


@dataclass_json
@dataclasses.dataclass
class CreateRuleRequest:
    optimisation_action_name: shared_optimisationactionname_enum.OptimisationActionNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('optimisationActionName') }})
    report_filter_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportFilterId') }})
    rule_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleName') }})
    end_utc_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endUtcDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_utc_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startUtcDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
