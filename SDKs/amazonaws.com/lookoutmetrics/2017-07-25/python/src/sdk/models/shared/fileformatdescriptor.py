import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import csvformatdescriptor as shared_csvformatdescriptor
from ..shared import jsonformatdescriptor as shared_jsonformatdescriptor


@dataclass_json
@dataclasses.dataclass
class FileFormatDescriptor:
    r"""FileFormatDescriptor
    Contains information about a source file's formatting.
    """
    
    csv_format_descriptor: Optional[shared_csvformatdescriptor.CsvFormatDescriptor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CsvFormatDescriptor') }})
    json_format_descriptor: Optional[shared_jsonformatdescriptor.JSONFormatDescriptor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JsonFormatDescriptor') }})
    
