import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3applicationcodelocationdescription as shared_s3applicationcodelocationdescription


@dataclass_json
@dataclasses.dataclass
class CodeContentDescription:
    r"""CodeContentDescription
    Describes details about the code of a Kinesis Data Analytics application.
    """
    
    code_md5: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeMD5') }})
    code_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeSize') }})
    s3_application_code_location_description: Optional[shared_s3applicationcodelocationdescription.S3ApplicationCodeLocationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ApplicationCodeLocationDescription') }})
    text_content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextContent') }})
    
