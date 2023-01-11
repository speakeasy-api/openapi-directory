import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsecstaskdefinitionvolumesefsvolumeconfigurationauthorizationconfigdetails as shared_awsecstaskdefinitionvolumesefsvolumeconfigurationauthorizationconfigdetails


@dataclass_json
@dataclasses.dataclass
class AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails:
    r"""AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails
    Information about the Amazon Elastic File System file system that is used for task storage.
    """
    
    authorization_config: Optional[shared_awsecstaskdefinitionvolumesefsvolumeconfigurationauthorizationconfigdetails.AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizationConfig') }})
    filesystem_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilesystemId') }})
    root_directory: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootDirectory') }})
    transit_encryption: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransitEncryption') }})
    transit_encryption_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransitEncryptionPort') }})
    
