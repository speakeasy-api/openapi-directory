import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificateconfiguration as shared_certificateconfiguration
from ..shared import fleettype_enum as shared_fleettype_enum
from ..shared import ec2instancetype_enum as shared_ec2instancetype_enum
from ..shared import protectionpolicy_enum as shared_protectionpolicy_enum
from ..shared import operatingsystem_enum as shared_operatingsystem_enum
from ..shared import resourcecreationlimitpolicy as shared_resourcecreationlimitpolicy
from ..shared import fleetstatus_enum as shared_fleetstatus_enum
from ..shared import fleetaction_enum as shared_fleetaction_enum


@dataclass_json
@dataclasses.dataclass
class FleetAttributes:
    r"""FleetAttributes
    <p>Describes a GameLift fleet of game hosting resources.</p> <p> <b>Related actions</b> </p> <p> <a>CreateFleet</a> | <a>DescribeFleetAttributes</a> </p>
    """
    
    build_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BuildArn') }})
    build_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BuildId') }})
    certificate_configuration: Optional[shared_certificateconfiguration.CertificateConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateConfiguration') }})
    creation_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    fleet_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetArn') }})
    fleet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    fleet_type: Optional[shared_fleettype_enum.FleetTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetType') }})
    instance_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceRoleArn') }})
    instance_type: Optional[shared_ec2instancetype_enum.Ec2InstanceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    log_paths: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogPaths') }})
    metric_groups: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricGroups') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    new_game_session_protection_policy: Optional[shared_protectionpolicy_enum.ProtectionPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewGameSessionProtectionPolicy') }})
    operating_system: Optional[shared_operatingsystem_enum.OperatingSystemEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OperatingSystem') }})
    resource_creation_limit_policy: Optional[shared_resourcecreationlimitpolicy.ResourceCreationLimitPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceCreationLimitPolicy') }})
    script_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScriptArn') }})
    script_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScriptId') }})
    server_launch_parameters: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerLaunchParameters') }})
    server_launch_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerLaunchPath') }})
    status: Optional[shared_fleetstatus_enum.FleetStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    stopped_actions: Optional[list[shared_fleetaction_enum.FleetActionEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoppedActions') }})
    termination_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TerminationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
