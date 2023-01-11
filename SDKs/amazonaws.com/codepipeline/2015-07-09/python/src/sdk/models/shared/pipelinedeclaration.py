import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import artifactstore as shared_artifactstore
from ..shared import stagedeclaration as shared_stagedeclaration


@dataclass_json
@dataclasses.dataclass
class PipelineDeclaration:
    r"""PipelineDeclaration
    Represents the structure of actions and stages to be performed in the pipeline.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    stages: list[shared_stagedeclaration.StageDeclaration] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stages') }})
    artifact_store: Optional[shared_artifactstore.ArtifactStore] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactStore') }})
    artifact_stores: Optional[dict[str, shared_artifactstore.ArtifactStore]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactStores') }})
    version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
