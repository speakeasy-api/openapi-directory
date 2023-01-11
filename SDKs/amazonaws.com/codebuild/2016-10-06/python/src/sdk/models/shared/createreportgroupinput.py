import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportexportconfig as shared_reportexportconfig
from ..shared import tag as shared_tag
from ..shared import reporttype_enum as shared_reporttype_enum


@dataclass_json
@dataclasses.dataclass
class CreateReportGroupInput:
    export_config: shared_reportexportconfig.ReportExportConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportConfig') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: shared_reporttype_enum.ReportTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
