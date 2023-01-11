import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3config as shared_s3config


@dataclass_json
@dataclasses.dataclass
class DataSource:
    r"""DataSource
    The source of your training data, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an AWS Key Management Service (KMS) key. This object is submitted in the <a>CreateDatasetImportJob</a> request.
    """
    
    s3_config: shared_s3config.S3Config = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Config') }})
    
