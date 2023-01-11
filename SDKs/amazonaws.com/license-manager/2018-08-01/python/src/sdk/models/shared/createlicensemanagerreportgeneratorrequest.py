import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportcontext as shared_reportcontext
from ..shared import reportfrequency as shared_reportfrequency
from ..shared import tag as shared_tag
from ..shared import reporttype_enum as shared_reporttype_enum


@dataclass_json
@dataclasses.dataclass
class CreateLicenseManagerReportGeneratorRequest:
    client_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    report_context: shared_reportcontext.ReportContext = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportContext') }})
    report_frequency: shared_reportfrequency.ReportFrequency = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportFrequency') }})
    report_generator_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportGeneratorName') }})
    type: list[shared_reporttype_enum.ReportTypeEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
