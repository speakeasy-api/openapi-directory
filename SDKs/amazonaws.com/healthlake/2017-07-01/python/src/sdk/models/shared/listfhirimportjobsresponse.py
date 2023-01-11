import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import importjobproperties as shared_importjobproperties


@dataclass_json
@dataclasses.dataclass
class ListFhirImportJobsResponse:
    import_job_properties_list: list[shared_importjobproperties.ImportJobProperties] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportJobPropertiesList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
