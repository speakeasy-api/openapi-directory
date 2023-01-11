import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simple_user as shared_simple_user
from ..shared import code_scanning_alert_instance as shared_code_scanning_alert_instance
from ..shared import code_scanning_alert_rule as shared_code_scanning_alert_rule
from ..shared import code_scanning_alert_state_enum as shared_code_scanning_alert_state_enum
from ..shared import code_scanning_analysis_tool as shared_code_scanning_analysis_tool


@dataclass_json
@dataclasses.dataclass
class CodeScanningAlert:
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dismissed_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismissed_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dismissed_by: shared_simple_user.SimpleUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismissed_by') }})
    dismissed_reason: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismissed_reason') }})
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    instances_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances_url') }})
    most_recent_instance: shared_code_scanning_alert_instance.CodeScanningAlertInstance = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('most_recent_instance') }})
    number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    rule: shared_code_scanning_alert_rule.CodeScanningAlertRule = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule') }})
    state: shared_code_scanning_alert_state_enum.CodeScanningAlertStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    tool: shared_code_scanning_analysis_tool.CodeScanningAnalysisTool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tool') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
