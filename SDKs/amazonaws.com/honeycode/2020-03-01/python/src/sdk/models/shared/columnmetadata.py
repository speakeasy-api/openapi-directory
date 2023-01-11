import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import format_enum as shared_format_enum


@dataclass_json
@dataclasses.dataclass
class ColumnMetadata:
    r"""ColumnMetadata
    Metadata for column in the table.
    """
    
    format: shared_format_enum.FormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
