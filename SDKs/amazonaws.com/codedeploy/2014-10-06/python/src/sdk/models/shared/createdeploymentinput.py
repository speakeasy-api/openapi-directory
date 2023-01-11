import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autorollbackconfiguration as shared_autorollbackconfiguration
from ..shared import fileexistsbehavior_enum as shared_fileexistsbehavior_enum
from ..shared import revisionlocation as shared_revisionlocation
from ..shared import targetinstances as shared_targetinstances


@dataclass_json
@dataclasses.dataclass
class CreateDeploymentInput:
    r"""CreateDeploymentInput
    Represents the input of a <code>CreateDeployment</code> operation.
    """
    
    application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    auto_rollback_configuration: Optional[shared_autorollbackconfiguration.AutoRollbackConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRollbackConfiguration') }})
    deployment_config_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfigName') }})
    deployment_group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentGroupName') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    file_exists_behavior: Optional[shared_fileexistsbehavior_enum.FileExistsBehaviorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileExistsBehavior') }})
    ignore_application_stop_failures: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreApplicationStopFailures') }})
    revision: Optional[shared_revisionlocation.RevisionLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    target_instances: Optional[shared_targetinstances.TargetInstances] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetInstances') }})
    update_outdated_instances_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateOutdatedInstancesOnly') }})
    
