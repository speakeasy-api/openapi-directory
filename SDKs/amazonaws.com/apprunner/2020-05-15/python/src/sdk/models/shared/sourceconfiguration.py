import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authenticationconfiguration as shared_authenticationconfiguration
from ..shared import coderepository as shared_coderepository
from ..shared import imagerepository as shared_imagerepository


@dataclass_json
@dataclasses.dataclass
class SourceConfiguration:
    r"""SourceConfiguration
    Describes the source deployed to an AWS App Runner service. It can be a code or an image repository.
    """
    
    authentication_configuration: Optional[shared_authenticationconfiguration.AuthenticationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthenticationConfiguration') }})
    auto_deployments_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoDeploymentsEnabled') }})
    code_repository: Optional[shared_coderepository.CodeRepository] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeRepository') }})
    image_repository: Optional[shared_imagerepository.ImageRepository] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageRepository') }})
    
