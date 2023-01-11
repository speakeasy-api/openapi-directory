import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportcontext as shared_reportcontext
from ..shared import reportfrequency as shared_reportfrequency
from ..shared import reporttype_enum as shared_reporttype_enum
from ..shared import s3location as shared_s3location
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class ReportGenerator:
    r"""ReportGenerator
    Describe the details of a report generator.
    """
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTime') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    last_report_generation_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastReportGenerationTime') }})
    last_run_failure_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastRunFailureReason') }})
    last_run_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastRunStatus') }})
    license_manager_report_generator_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseManagerReportGeneratorArn') }})
    report_context: Optional[shared_reportcontext.ReportContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportContext') }})
    report_creator_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportCreatorAccount') }})
    report_frequency: Optional[shared_reportfrequency.ReportFrequency] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportFrequency') }})
    report_generator_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportGeneratorName') }})
    report_type: Optional[list[shared_reporttype_enum.ReportTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportType') }})
    s3_location: Optional[shared_s3location.S3Location] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Location') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
