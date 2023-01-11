import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails:
    r"""AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails
    The private repository authentication credentials to use.
    """
    
    credentials_parameter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CredentialsParameter') }})
    
