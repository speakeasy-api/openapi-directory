import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deploymentcomponentupdatepolicy as shared_deploymentcomponentupdatepolicy
from ..shared import deploymentconfigurationvalidationpolicy as shared_deploymentconfigurationvalidationpolicy
from ..shared import deploymentfailurehandlingpolicy_enum as shared_deploymentfailurehandlingpolicy_enum


@dataclass_json
@dataclasses.dataclass
class DeploymentPolicies:
    r"""DeploymentPolicies
    Contains information about policies that define how a deployment updates components and handles failure.
    """
    
    component_update_policy: Optional[shared_deploymentcomponentupdatepolicy.DeploymentComponentUpdatePolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentUpdatePolicy') }})
    configuration_validation_policy: Optional[shared_deploymentconfigurationvalidationpolicy.DeploymentConfigurationValidationPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationValidationPolicy') }})
    failure_handling_policy: Optional[shared_deploymentfailurehandlingpolicy_enum.DeploymentFailureHandlingPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureHandlingPolicy') }})
    
