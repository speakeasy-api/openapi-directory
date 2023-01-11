import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exportjobproperties as shared_exportjobproperties


@dataclass_json
@dataclasses.dataclass
class ListFhirExportJobsResponse:
    export_job_properties_list: list[shared_exportjobproperties.ExportJobProperties] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExportJobPropertiesList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
