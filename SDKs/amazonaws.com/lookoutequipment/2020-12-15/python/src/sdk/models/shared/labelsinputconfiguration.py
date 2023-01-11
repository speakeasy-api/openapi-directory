import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import labelss3inputconfiguration as shared_labelss3inputconfiguration


@dataclass_json
@dataclasses.dataclass
class LabelsInputConfiguration:
    r"""LabelsInputConfiguration
    Contains the configuration information for the S3 location being used to hold label data. 
    """
    
    s3_input_configuration: shared_labelss3inputconfiguration.LabelsS3InputConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3InputConfiguration') }})
    
