import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import incidentrecordsource as shared_incidentrecordsource
from ..shared import incidentrecordstatus_enum as shared_incidentrecordstatus_enum


@dataclass_json
@dataclasses.dataclass
class IncidentRecordSummary:
    r"""IncidentRecordSummary
    Details describing an incident record.
    """
    
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    creation_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    impact: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('impact') }})
    incident_record_source: shared_incidentrecordsource.IncidentRecordSource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incidentRecordSource') }})
    status: shared_incidentrecordstatus_enum.IncidentRecordStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    resolved_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolvedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
