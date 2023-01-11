import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import computeresponse as shared_computeresponse
from ..shared import datasource as shared_datasource
from ..shared import failurebehavior_enum as shared_failurebehavior_enum
from ..shared import simulationjoberrorcode_enum as shared_simulationjoberrorcode_enum
from ..shared import loggingconfig as shared_loggingconfig
from ..shared import networkinterface as shared_networkinterface
from ..shared import outputlocation as shared_outputlocation
from ..shared import robotapplicationconfig as shared_robotapplicationconfig
from ..shared import simulationapplicationconfig as shared_simulationapplicationconfig
from ..shared import simulationjobstatus_enum as shared_simulationjobstatus_enum
from ..shared import vpcconfigresponse as shared_vpcconfigresponse


@dataclass_json
@dataclasses.dataclass
class DescribeSimulationJobResponse:
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    client_request_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    compute: Optional[shared_computeresponse.ComputeResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compute') }})
    data_sources: Optional[list[shared_datasource.DataSource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSources') }})
    failure_behavior: Optional[shared_failurebehavior_enum.FailureBehaviorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureBehavior') }})
    failure_code: Optional[shared_simulationjoberrorcode_enum.SimulationJobErrorCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCode') }})
    failure_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    iam_role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamRole') }})
    last_started_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastStartedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    logging_config: Optional[shared_loggingconfig.LoggingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingConfig') }})
    max_job_duration_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxJobDurationInSeconds') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_interface: Optional[shared_networkinterface.NetworkInterface] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInterface') }})
    output_location: Optional[shared_outputlocation.OutputLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputLocation') }})
    robot_applications: Optional[list[shared_robotapplicationconfig.RobotApplicationConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('robotApplications') }})
    simulation_applications: Optional[list[shared_simulationapplicationconfig.SimulationApplicationConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simulationApplications') }})
    simulation_time_millis: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simulationTimeMillis') }})
    status: Optional[shared_simulationjobstatus_enum.SimulationJobStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    vpc_config: Optional[shared_vpcconfigresponse.VpcConfigResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConfig') }})
    
