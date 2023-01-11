import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compatibility_enum as shared_compatibility_enum
from ..shared import containerdefinition as shared_containerdefinition
from ..shared import ephemeralstorage as shared_ephemeralstorage
from ..shared import inferenceaccelerator as shared_inferenceaccelerator
from ..shared import ipcmode_enum as shared_ipcmode_enum
from ..shared import networkmode_enum as shared_networkmode_enum
from ..shared import pidmode_enum as shared_pidmode_enum
from ..shared import taskdefinitionplacementconstraint as shared_taskdefinitionplacementconstraint
from ..shared import proxyconfiguration as shared_proxyconfiguration
from ..shared import attribute as shared_attribute
from ..shared import taskdefinitionstatus_enum as shared_taskdefinitionstatus_enum
from ..shared import volume as shared_volume


@dataclass_json
@dataclasses.dataclass
class TaskDefinition:
    r"""TaskDefinition
    The details of a task definition which describes the container and volume definitions of an Amazon Elastic Container Service task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task.
    """
    
    compatibilities: Optional[list[shared_compatibility_enum.CompatibilityEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibilities') }})
    container_definitions: Optional[list[shared_containerdefinition.ContainerDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerDefinitions') }})
    cpu: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu') }})
    deregistered_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deregisteredAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ephemeral_storage: Optional[shared_ephemeralstorage.EphemeralStorage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ephemeralStorage') }})
    execution_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionRoleArn') }})
    family: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('family') }})
    inference_accelerators: Optional[list[shared_inferenceaccelerator.InferenceAccelerator]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inferenceAccelerators') }})
    ipc_mode: Optional[shared_ipcmode_enum.IpcModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipcMode') }})
    memory: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    network_mode: Optional[shared_networkmode_enum.NetworkModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkMode') }})
    pid_mode: Optional[shared_pidmode_enum.PidModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pidMode') }})
    placement_constraints: Optional[list[shared_taskdefinitionplacementconstraint.TaskDefinitionPlacementConstraint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementConstraints') }})
    proxy_configuration: Optional[shared_proxyconfiguration.ProxyConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxyConfiguration') }})
    registered_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registeredAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    registered_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registeredBy') }})
    requires_attributes: Optional[list[shared_attribute.Attribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiresAttributes') }})
    requires_compatibilities: Optional[list[shared_compatibility_enum.CompatibilityEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiresCompatibilities') }})
    revision: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    status: Optional[shared_taskdefinitionstatus_enum.TaskDefinitionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    task_definition_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskDefinitionArn') }})
    task_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskRoleArn') }})
    volumes: Optional[list[shared_volume.Volume]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    
