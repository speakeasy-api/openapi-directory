import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import csvfilecompression_enum as shared_csvfilecompression_enum


@dataclass_json
@dataclasses.dataclass
class CsvFormatDescriptor:
    r"""CsvFormatDescriptor
    Contains information about how a source CSV data file should be analyzed.
    """
    
    charset: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Charset') }})
    contains_header: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContainsHeader') }})
    delimiter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Delimiter') }})
    file_compression: Optional[shared_csvfilecompression_enum.CsvFileCompressionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileCompression') }})
    header_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HeaderList') }})
    quote_symbol: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuoteSymbol') }})
    
