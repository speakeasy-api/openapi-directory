import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import csvheaderoption_enum as shared_csvheaderoption_enum


@dataclass_json
@dataclasses.dataclass
class CreateCsvClassifierRequest:
    r"""CreateCsvClassifierRequest
    Specifies a custom CSV classifier for <code>CreateClassifier</code> to create.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    allow_single_column: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowSingleColumn') }})
    contains_header: Optional[shared_csvheaderoption_enum.CsvHeaderOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContainsHeader') }})
    delimiter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Delimiter') }})
    disable_value_trimming: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisableValueTrimming') }})
    header: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Header') }})
    quote_symbol: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuoteSymbol') }})
    
