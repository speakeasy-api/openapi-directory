import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attribute as shared_attribute
from ..shared import scope as shared_scope


@dataclass_json
@dataclasses.dataclass
class ExclusionPreview:
    r"""ExclusionPreview
    Contains information about what is excluded from an assessment run given the current state of the assessment template.
    """
    
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    recommendation: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendation') }})
    scopes: list[shared_scope.Scope] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    attributes: Optional[list[shared_attribute.Attribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    
