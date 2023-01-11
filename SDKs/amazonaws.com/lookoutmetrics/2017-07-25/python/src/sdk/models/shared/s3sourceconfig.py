import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fileformatdescriptor as shared_fileformatdescriptor


@dataclass_json
@dataclasses.dataclass
class S3SourceConfig:
    r"""S3SourceConfig
    Contains information about the configuration of the S3 bucket that contains source files.
    """
    
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    file_format_descriptor: Optional[shared_fileformatdescriptor.FileFormatDescriptor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileFormatDescriptor') }})
    historical_data_path_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HistoricalDataPathList') }})
    templated_path_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplatedPathList') }})
    
