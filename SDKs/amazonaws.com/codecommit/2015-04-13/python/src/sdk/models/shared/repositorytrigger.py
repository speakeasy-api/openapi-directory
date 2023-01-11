import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repositorytriggereventenum_enum as shared_repositorytriggereventenum_enum


@dataclass_json
@dataclasses.dataclass
class RepositoryTrigger:
    r"""RepositoryTrigger
    Information about a trigger for a repository.
    """
    
    destination_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationArn') }})
    events: list[shared_repositorytriggereventenum_enum.RepositoryTriggerEventEnumEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    branches: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branches') }})
    custom_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customData') }})
    
