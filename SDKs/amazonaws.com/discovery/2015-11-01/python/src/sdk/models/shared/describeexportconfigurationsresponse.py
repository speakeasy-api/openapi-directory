import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exportinfo as shared_exportinfo


@dataclass_json
@dataclasses.dataclass
class DescribeExportConfigurationsResponse:
    exports_info: Optional[list[shared_exportinfo.ExportInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportsInfo') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
