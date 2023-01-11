import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputfilereadcsvconfiguration as shared_inputfilereadcsvconfiguration
from ..shared import fileformatstrategy_enum as shared_fileformatstrategy_enum
from ..shared import inputfilereadxmlconfiguration as shared_inputfilereadxmlconfiguration


@dataclass_json
@dataclasses.dataclass
class InputFileReadConfiguration:
    r"""InputFileReadConfiguration
    Describe how to read the file. If FileFormatStrategy is CSV, csvFileReadProperties is required. Otherwise the xmlFileReadProperties is required.
    
    """
    
    format: shared_fileformatstrategy_enum.FileFormatStrategyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    csv_file_read_properties: Optional[shared_inputfilereadcsvconfiguration.InputFileReadCsvConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('csvFileReadProperties') }})
    culture_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cultureName') }})
    encoding_type_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encodingTypeName') }})
    xml_file_read_properties: Optional[shared_inputfilereadxmlconfiguration.InputFileReadXMLConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xmlFileReadProperties') }})
    
