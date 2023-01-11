import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import noncompliantresource as shared_noncompliantresource
from ..shared import relatedresource as shared_relatedresource
from ..shared import auditfindingseverity_enum as shared_auditfindingseverity_enum


@dataclass_json
@dataclasses.dataclass
class AuditFinding:
    r"""AuditFinding
    The findings (results) of the audit.
    """
    
    check_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkName') }})
    finding_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingId') }})
    finding_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_suppressed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSuppressed') }})
    non_compliant_resource: Optional[shared_noncompliantresource.NonCompliantResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonCompliantResource') }})
    reason_for_non_compliance: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasonForNonCompliance') }})
    reason_for_non_compliance_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasonForNonComplianceCode') }})
    related_resources: Optional[list[shared_relatedresource.RelatedResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedResources') }})
    severity: Optional[shared_auditfindingseverity_enum.AuditFindingSeverityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    task_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskId') }})
    task_start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
