import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import targetcontainerrepository as shared_targetcontainerrepository


@dataclass_json
@dataclasses.dataclass
class ContainerDistributionConfiguration:
    r"""ContainerDistributionConfiguration
    Container distribution settings for encryption, licensing, and sharing in a specific Region.
    """
    
    target_repository: shared_targetcontainerrepository.TargetContainerRepository = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetRepository') }})
    container_tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerTags') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
