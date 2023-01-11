import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3contentlocation as shared_s3contentlocation


@dataclass_json
@dataclasses.dataclass
class CodeContent:
    r"""CodeContent
    Specifies either the application code, or the location of the application code, for a Flink-based Kinesis Data Analytics application. 
    """
    
    s3_content_location: Optional[shared_s3contentlocation.S3ContentLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ContentLocation') }})
    text_content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextContent') }})
    zip_file_content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ZipFileContent') }})
    
