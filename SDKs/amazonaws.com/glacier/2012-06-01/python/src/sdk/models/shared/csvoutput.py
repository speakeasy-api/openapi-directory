import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import quotefields_enum as shared_quotefields_enum


@dataclass_json
@dataclasses.dataclass
class CsvOutput:
    r"""CsvOutput
    Contains information about the comma-separated value (CSV) file that the job results are stored in.
    """
    
    field_delimiter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FieldDelimiter') }})
    quote_character: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuoteCharacter') }})
    quote_escape_character: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuoteEscapeCharacter') }})
    quote_fields: Optional[shared_quotefields_enum.QuoteFieldsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuoteFields') }})
    record_delimiter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordDelimiter') }})
    
