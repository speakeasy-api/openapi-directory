import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportdefinition as shared_reportdefinition


@dataclass_json
@dataclasses.dataclass
class ModifyReportDefinitionRequest:
    report_definition: shared_reportdefinition.ReportDefinition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportDefinition') }})
    report_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportName') }})
    
