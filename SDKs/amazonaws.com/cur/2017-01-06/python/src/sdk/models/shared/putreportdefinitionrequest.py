import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportdefinition as shared_reportdefinition


@dataclass_json
@dataclasses.dataclass
class PutReportDefinitionRequest:
    r"""PutReportDefinitionRequest
    Creates a Cost and Usage Report.
    """
    
    report_definition: shared_reportdefinition.ReportDefinition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportDefinition') }})
    
