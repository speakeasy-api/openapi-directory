import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import documentclassificationjobproperties as shared_documentclassificationjobproperties


@dataclass_json
@dataclasses.dataclass
class ListDocumentClassificationJobsResponse:
    document_classification_job_properties_list: Optional[list[shared_documentclassificationjobproperties.DocumentClassificationJobProperties]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentClassificationJobPropertiesList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
