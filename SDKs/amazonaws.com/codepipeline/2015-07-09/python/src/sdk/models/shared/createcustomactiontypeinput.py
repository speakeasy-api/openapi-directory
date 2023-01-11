import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actioncategory_enum as shared_actioncategory_enum
from ..shared import actionconfigurationproperty as shared_actionconfigurationproperty
from ..shared import artifactdetails as shared_artifactdetails
from ..shared import actiontypesettings as shared_actiontypesettings
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateCustomActionTypeInput:
    r"""CreateCustomActionTypeInput
    Represents the input of a CreateCustomActionType operation.
    """
    
    category: shared_actioncategory_enum.ActionCategoryEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    input_artifact_details: shared_artifactdetails.ArtifactDetails = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputArtifactDetails') }})
    output_artifact_details: shared_artifactdetails.ArtifactDetails = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputArtifactDetails') }})
    provider: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    configuration_properties: Optional[list[shared_actionconfigurationproperty.ActionConfigurationProperty]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationProperties') }})
    settings: Optional[shared_actiontypesettings.ActionTypeSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
