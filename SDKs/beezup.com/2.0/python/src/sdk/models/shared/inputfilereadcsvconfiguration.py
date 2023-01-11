import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class InputFileReadCsvConfiguration:
    r"""InputFileReadCsvConfiguration
    The CSV file description
    """
    
    csv_separator: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('csvSeparator') }})
    has_header_record: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasHeaderRecord') }})
    ignore_header_record: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreHeaderRecord') }})
    csv_text_qualifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('csvTextQualifier') }})
    
