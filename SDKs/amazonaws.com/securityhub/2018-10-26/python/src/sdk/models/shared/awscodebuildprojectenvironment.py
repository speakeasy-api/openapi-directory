import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awscodebuildprojectenvironmentregistrycredential as shared_awscodebuildprojectenvironmentregistrycredential


@dataclass_json
@dataclasses.dataclass
class AwsCodeBuildProjectEnvironment:
    r"""AwsCodeBuildProjectEnvironment
    Information about the build environment for this build project.
    """
    
    certificate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Certificate') }})
    image_pull_credentials_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImagePullCredentialsType') }})
    registry_credential: Optional[shared_awscodebuildprojectenvironmentregistrycredential.AwsCodeBuildProjectEnvironmentRegistryCredential] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistryCredential') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
