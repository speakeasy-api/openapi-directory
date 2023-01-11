import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class S3DataSpec:
    r"""S3DataSpec
     Describes the data specification of a <code>DataSource</code>.
    """
    
    data_location_s3: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataLocationS3') }})
    data_rearrangement: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataRearrangement') }})
    data_schema: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSchema') }})
    data_schema_location_s3: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSchemaLocationS3') }})
    
