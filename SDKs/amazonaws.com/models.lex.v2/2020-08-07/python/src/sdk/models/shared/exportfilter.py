import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exportfiltername_enum as shared_exportfiltername_enum
from ..shared import exportfilteroperator_enum as shared_exportfilteroperator_enum


@dataclass_json
@dataclasses.dataclass
class ExportFilter:
    r"""ExportFilter
    Filtes the response form the operation
    """
    
    name: shared_exportfiltername_enum.ExportFilterNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operator: shared_exportfilteroperator_enum.ExportFilterOperatorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
