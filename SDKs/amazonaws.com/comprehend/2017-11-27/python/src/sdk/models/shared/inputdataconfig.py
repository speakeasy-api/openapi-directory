import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import documentreaderconfig as shared_documentreaderconfig
from ..shared import inputformat_enum as shared_inputformat_enum


@dataclass_json
@dataclasses.dataclass
class InputDataConfig:
    r"""InputDataConfig
    The input properties for an inference job.
    """
    
    s3_uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    document_reader_config: Optional[shared_documentreaderconfig.DocumentReaderConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentReaderConfig') }})
    input_format: Optional[shared_inputformat_enum.InputFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputFormat') }})
    
