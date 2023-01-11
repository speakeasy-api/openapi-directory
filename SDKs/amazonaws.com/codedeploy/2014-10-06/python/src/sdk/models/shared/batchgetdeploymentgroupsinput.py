import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BatchGetDeploymentGroupsInput:
    r"""BatchGetDeploymentGroupsInput
    Represents the input of a <code>BatchGetDeploymentGroups</code> operation.
    """
    
    application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    deployment_group_names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentGroupNames') }})
    
