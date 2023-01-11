import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dataformat_enum as shared_dataformat_enum


@dataclass_json
@dataclasses.dataclass
class ImportDataSource:
    r"""ImportDataSource
    An object that contains details about the data source of the import job.
    """
    
    data_format: shared_dataformat_enum.DataFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataFormat') }})
    s3_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Url') }})
    
