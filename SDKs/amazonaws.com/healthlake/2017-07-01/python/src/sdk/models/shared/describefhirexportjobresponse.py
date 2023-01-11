import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exportjobproperties as shared_exportjobproperties


@dataclass_json
@dataclasses.dataclass
class DescribeFhirExportJobResponse:
    export_job_properties: shared_exportjobproperties.ExportJobProperties = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExportJobProperties') }})
    
