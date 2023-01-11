import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ingestions3inputconfiguration as shared_ingestions3inputconfiguration


@dataclass_json
@dataclasses.dataclass
class IngestionInputConfiguration:
    r"""IngestionInputConfiguration
     Specifies configuration information for the input data for the data ingestion job, including input data S3 location. 
    """
    
    s3_input_configuration: shared_ingestions3inputconfiguration.IngestionS3InputConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3InputConfiguration') }})
    
