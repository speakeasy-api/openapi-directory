import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import optimisationactionname_enum as shared_optimisationactionname_enum
from ..shared import rulelastexecutionstatus_enum as shared_rulelastexecutionstatus_enum
from ..shared import rulelinks as shared_rulelinks


@dataclass_json
@dataclasses.dataclass
class Rule:
    action_name: shared_optimisationactionname_enum.OptimisationActionNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionName') }})
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    links: shared_rulelinks.RuleLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    position: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    report_filter_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportFilterId') }})
    rule_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleId') }})
    rule_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleName') }})
    last_execution_status: Optional[shared_rulelastexecutionstatus_enum.RuleLastExecutionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastExecutionStatus') }})
    last_execution_utc_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastExecutionUtcDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    validity_end_utc_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validityEndUtcDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    validity_start_utc_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validityStartUtcDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
