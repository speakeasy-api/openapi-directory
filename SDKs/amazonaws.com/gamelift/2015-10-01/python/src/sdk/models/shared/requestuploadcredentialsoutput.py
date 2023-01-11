import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3location as shared_s3location
from ..shared import awscredentials as shared_awscredentials


@dataclass_json
@dataclasses.dataclass
class RequestUploadCredentialsOutput:
    r"""RequestUploadCredentialsOutput
    Represents the returned data in response to a request operation.
    """
    
    storage_location: Optional[shared_s3location.S3Location] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageLocation') }})
    upload_credentials: Optional[shared_awscredentials.AwsCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UploadCredentials') }})
    
