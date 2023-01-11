import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import artifactcategory_enum as shared_artifactcategory_enum


@dataclass_json
@dataclasses.dataclass
class ListArtifactsRequest:
    r"""ListArtifactsRequest
    Represents a request to the list artifacts operation.
    """
    
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    type: shared_artifactcategory_enum.ArtifactCategoryEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
