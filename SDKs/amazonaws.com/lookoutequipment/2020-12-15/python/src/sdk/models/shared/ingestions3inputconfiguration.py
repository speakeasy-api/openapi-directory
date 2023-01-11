import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IngestionS3InputConfiguration:
    r"""IngestionS3InputConfiguration
     Specifies S3 configuration information for the input data for the data ingestion job. 
    """
    
    bucket: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bucket') }})
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Prefix') }})
    
