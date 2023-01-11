import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assessmentreportsdestination as shared_assessmentreportsdestination
from ..shared import delegation as shared_delegation
from ..shared import role as shared_role
from ..shared import scope as shared_scope
from ..shared import assessmentstatus_enum as shared_assessmentstatus_enum


@dataclass_json
@dataclasses.dataclass
class AssessmentMetadata:
    r"""AssessmentMetadata
     The metadata associated with the specified assessment. 
    """
    
    assessment_reports_destination: Optional[shared_assessmentreportsdestination.AssessmentReportsDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentReportsDestination') }})
    compliance_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceType') }})
    creation_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    delegations: Optional[list[shared_delegation.Delegation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delegations') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_updated: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    roles: Optional[list[shared_role.Role]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    scope: Optional[shared_scope.Scope] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    status: Optional[shared_assessmentstatus_enum.AssessmentStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
