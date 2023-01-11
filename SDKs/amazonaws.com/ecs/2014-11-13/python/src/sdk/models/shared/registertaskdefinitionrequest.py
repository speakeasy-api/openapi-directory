import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerdefinition as shared_containerdefinition
from ..shared import ephemeralstorage as shared_ephemeralstorage
from ..shared import inferenceaccelerator as shared_inferenceaccelerator
from ..shared import ipcmode_enum as shared_ipcmode_enum
from ..shared import networkmode_enum as shared_networkmode_enum
from ..shared import pidmode_enum as shared_pidmode_enum
from ..shared import taskdefinitionplacementconstraint as shared_taskdefinitionplacementconstraint
from ..shared import proxyconfiguration as shared_proxyconfiguration
from ..shared import compatibility_enum as shared_compatibility_enum
from ..shared import tag as shared_tag
from ..shared import volume as shared_volume


@dataclass_json
@dataclasses.dataclass
class RegisterTaskDefinitionRequest:
    container_definitions: list[shared_containerdefinition.ContainerDefinition] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerDefinitions') }})
    family: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('family') }})
    cpu: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu') }})
    ephemeral_storage: Optional[shared_ephemeralstorage.EphemeralStorage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ephemeralStorage') }})
    execution_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionRoleArn') }})
    inference_accelerators: Optional[list[shared_inferenceaccelerator.InferenceAccelerator]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inferenceAccelerators') }})
    ipc_mode: Optional[shared_ipcmode_enum.IpcModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipcMode') }})
    memory: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    network_mode: Optional[shared_networkmode_enum.NetworkModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkMode') }})
    pid_mode: Optional[shared_pidmode_enum.PidModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pidMode') }})
    placement_constraints: Optional[list[shared_taskdefinitionplacementconstraint.TaskDefinitionPlacementConstraint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementConstraints') }})
    proxy_configuration: Optional[shared_proxyconfiguration.ProxyConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxyConfiguration') }})
    requires_compatibilities: Optional[list[shared_compatibility_enum.CompatibilityEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiresCompatibilities') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    task_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskRoleArn') }})
    volumes: Optional[list[shared_volume.Volume]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    
