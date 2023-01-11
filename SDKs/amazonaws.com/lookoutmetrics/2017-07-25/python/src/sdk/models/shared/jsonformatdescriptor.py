import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jsonfilecompression_enum as shared_jsonfilecompression_enum


@dataclass_json
@dataclasses.dataclass
class JSONFormatDescriptor:
    r"""JSONFormatDescriptor
    Contains information about how a source JSON data file should be analyzed.
    """
    
    charset: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Charset') }})
    file_compression: Optional[shared_jsonfilecompression_enum.JSONFileCompressionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileCompression') }})
    
