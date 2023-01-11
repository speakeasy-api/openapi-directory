import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compute as shared_compute
from ..shared import datasourceconfig as shared_datasourceconfig
from ..shared import failurebehavior_enum as shared_failurebehavior_enum
from ..shared import loggingconfig as shared_loggingconfig
from ..shared import outputlocation as shared_outputlocation
from ..shared import robotapplicationconfig as shared_robotapplicationconfig
from ..shared import simulationapplicationconfig as shared_simulationapplicationconfig
from ..shared import vpcconfig as shared_vpcconfig


@dataclass_json
@dataclasses.dataclass
class SimulationJobRequest:
    r"""SimulationJobRequest
    Information about a simulation job request.
    """
    
    max_job_duration_in_seconds: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxJobDurationInSeconds') }})
    compute: Optional[shared_compute.Compute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compute') }})
    data_sources: Optional[list[shared_datasourceconfig.DataSourceConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSources') }})
    failure_behavior: Optional[shared_failurebehavior_enum.FailureBehaviorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureBehavior') }})
    iam_role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamRole') }})
    logging_config: Optional[shared_loggingconfig.LoggingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingConfig') }})
    output_location: Optional[shared_outputlocation.OutputLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputLocation') }})
    robot_applications: Optional[list[shared_robotapplicationconfig.RobotApplicationConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('robotApplications') }})
    simulation_applications: Optional[list[shared_simulationapplicationconfig.SimulationApplicationConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simulationApplications') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    use_default_applications: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useDefaultApplications') }})
    vpc_config: Optional[shared_vpcconfig.VpcConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConfig') }})
    
