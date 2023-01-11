import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3location as shared_s3location
from ..shared import format_enum as shared_format_enum
from ..shared import reportfrequency_enum as shared_reportfrequency_enum


@dataclass_json
@dataclasses.dataclass
class GetReportDefinitionResult:
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    destination_s3_location: shared_s3location.S3Location = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationS3Location') }})
    format: shared_format_enum.FormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    last_updated: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    report_description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportDescription') }})
    report_frequency: shared_reportfrequency_enum.ReportFrequencyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportFrequency') }})
    report_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportId') }})
    
