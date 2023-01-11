import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerrepositoryservice_enum as shared_containerrepositoryservice_enum


@dataclass_json
@dataclasses.dataclass
class TargetContainerRepository:
    r"""TargetContainerRepository
    The container repository where the output container image is stored.
    """
    
    repository_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    service: shared_containerrepositoryservice_enum.ContainerRepositoryServiceEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    
