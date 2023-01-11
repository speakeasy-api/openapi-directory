import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3object as shared_s3object


@dataclass_json
@dataclasses.dataclass
class DeploymentConfig:
    r"""DeploymentConfig
    Information about a deployment configuration.
    """
    
    concurrent_deployment_percentage: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concurrentDeploymentPercentage') }})
    download_condition_file: Optional[shared_s3object.S3Object] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadConditionFile') }})
    failure_threshold_percentage: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureThresholdPercentage') }})
    robot_deployment_timeout_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('robotDeploymentTimeoutInSeconds') }})
    
