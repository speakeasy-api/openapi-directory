import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ExportFilter:
    r"""ExportFilter
    Used to select which agent's data is to be exported. A single agent ID may be selected for export using the <a href=\"http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html\">StartExportTask</a> action.
    """
    
    condition: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
