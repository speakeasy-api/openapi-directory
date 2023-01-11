import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceconfiguration as shared_resourceconfiguration
from ..shared import variable as shared_variable


@dataclass_json
@dataclasses.dataclass
class ContainerDatasetAction:
    r"""ContainerDatasetAction
    Information required to run the <code>containerAction</code> to produce dataset contents.
    """
    
    execution_role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionRoleArn') }})
    image: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    resource_configuration: shared_resourceconfiguration.ResourceConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceConfiguration') }})
    variables: Optional[list[shared_variable.Variable]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variables') }})
    
