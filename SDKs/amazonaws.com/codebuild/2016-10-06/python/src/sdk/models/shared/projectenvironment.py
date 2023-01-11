import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import computetype_enum as shared_computetype_enum
from ..shared import environmentvariable as shared_environmentvariable
from ..shared import imagepullcredentialstype_enum as shared_imagepullcredentialstype_enum
from ..shared import registrycredential as shared_registrycredential
from ..shared import environmenttype_enum as shared_environmenttype_enum


@dataclass_json
@dataclasses.dataclass
class ProjectEnvironment:
    r"""ProjectEnvironment
    Information about the build environment of the build project.
    """
    
    compute_type: shared_computetype_enum.ComputeTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeType') }})
    image: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    type: shared_environmenttype_enum.EnvironmentTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    certificate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    environment_variables: Optional[list[shared_environmentvariable.EnvironmentVariable]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariables') }})
    image_pull_credentials_type: Optional[shared_imagepullcredentialstype_enum.ImagePullCredentialsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imagePullCredentialsType') }})
    privileged_mode: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privilegedMode') }})
    registry_credential: Optional[shared_registrycredential.RegistryCredential] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryCredential') }})
    
