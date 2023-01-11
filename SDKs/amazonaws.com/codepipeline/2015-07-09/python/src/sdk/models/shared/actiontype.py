import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionconfigurationproperty as shared_actionconfigurationproperty
from ..shared import actiontypeid as shared_actiontypeid
from ..shared import artifactdetails as shared_artifactdetails
from ..shared import actiontypesettings as shared_actiontypesettings


@dataclass_json
@dataclasses.dataclass
class ActionType:
    r"""ActionType
    Returns information about the details of an action type.
    """
    
    id: shared_actiontypeid.ActionTypeID = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    input_artifact_details: shared_artifactdetails.ArtifactDetails = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputArtifactDetails') }})
    output_artifact_details: shared_artifactdetails.ArtifactDetails = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputArtifactDetails') }})
    action_configuration_properties: Optional[list[shared_actionconfigurationproperty.ActionConfigurationProperty]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionConfigurationProperties') }})
    settings: Optional[shared_actiontypesettings.ActionTypeSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
