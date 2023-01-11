import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportfileformat_enum as shared_reportfileformat_enum
from ..shared import reporttype_enum as shared_reporttype_enum


@dataclass_json
@dataclasses.dataclass
class GetAssessmentReportRequest:
    assessment_run_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentRunArn') }})
    report_file_format: shared_reportfileformat_enum.ReportFileFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportFileFormat') }})
    report_type: shared_reporttype_enum.ReportTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportType') }})
    
