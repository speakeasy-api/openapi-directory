import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import registryalias as shared_registryalias


@dataclass_json
@dataclasses.dataclass
class Registry:
    r"""Registry
    The details of a public registry.
    """
    
    aliases: list[shared_registryalias.RegistryAlias] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('aliases') }})
    registry_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryArn') }})
    registry_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryId') }})
    registry_uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryUri') }})
    verified: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verified') }})
    
