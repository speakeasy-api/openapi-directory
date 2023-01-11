import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import importjobproperties as shared_importjobproperties


@dataclass_json
@dataclasses.dataclass
class DescribeFhirImportJobResponse:
    import_job_properties: shared_importjobproperties.ImportJobProperties = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportJobProperties') }})
    
