import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import importdatacharacterencoding_enum as shared_importdatacharacterencoding_enum


@dataclass_json
@dataclasses.dataclass
class DelimitedTextImportOptions:
    r"""DelimitedTextImportOptions
     An object that contains the options relating to parsing delimited text as part of an import request. 
    """
    
    delimiter: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delimiter') }})
    data_character_encoding: Optional[shared_importdatacharacterencoding_enum.ImportDataCharacterEncodingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataCharacterEncoding') }})
    has_header_row: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasHeaderRow') }})
    ignore_empty_rows: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreEmptyRows') }})
    
