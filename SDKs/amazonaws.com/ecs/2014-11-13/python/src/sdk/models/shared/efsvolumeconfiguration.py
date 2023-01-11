import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import efsauthorizationconfig as shared_efsauthorizationconfig
from ..shared import efstransitencryption_enum as shared_efstransitencryption_enum


@dataclass_json
@dataclasses.dataclass
class EfsVolumeConfiguration:
    r"""EfsVolumeConfiguration
    This parameter is specified when you are using an Amazon Elastic File System file system for task storage. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html\">Amazon EFS Volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
    """
    
    file_system_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileSystemId') }})
    authorization_config: Optional[shared_efsauthorizationconfig.EfsAuthorizationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationConfig') }})
    root_directory: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootDirectory') }})
    transit_encryption: Optional[shared_efstransitencryption_enum.EfsTransitEncryptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitEncryption') }})
    transit_encryption_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitEncryptionPort') }})
    
