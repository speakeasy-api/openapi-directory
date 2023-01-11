import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ruleexecutionreportingerrortype_enum as shared_ruleexecutionreportingerrortype_enum
from ..shared import ruleexecutionreportingexecutionsource_enum as shared_ruleexecutionreportingexecutionsource_enum
from ..shared import ruleexecutionreportinglinks as shared_ruleexecutionreportinglinks
from ..shared import optimisationactionname_enum as shared_optimisationactionname_enum
from ..shared import ruleexecutionreportingstatus_enum as shared_ruleexecutionreportingstatus_enum


@dataclass_json
@dataclasses.dataclass
class RuleExecutionReporting:
    execution_source: shared_ruleexecutionreportingexecutionsource_enum.RuleExecutionReportingExecutionSourceEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionSource') }})
    rule_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleId') }})
    rule_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleName') }})
    status: shared_ruleexecutionreportingstatus_enum.RuleExecutionReportingStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    active_affected_product_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeAffectedProductCount') }})
    affected_channel_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affectedChannelCount') }})
    affected_product_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affectedProductCount') }})
    completed_utc_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completedUtcDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error_type: Optional[shared_ruleexecutionreportingerrortype_enum.RuleExecutionReportingErrorTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorType') }})
    links: Optional[shared_ruleexecutionreportinglinks.RuleExecutionReportingLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    optimisation_action_name: Optional[shared_optimisationactionname_enum.OptimisationActionNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optimisationActionName') }})
    report_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportUrl') }})
    started_utc_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedUtcDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
