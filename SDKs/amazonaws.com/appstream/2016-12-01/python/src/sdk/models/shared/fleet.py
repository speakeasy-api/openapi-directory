import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import computecapacitystatus as shared_computecapacitystatus
from ..shared import domainjoininfo as shared_domainjoininfo
from ..shared import fleeterror as shared_fleeterror
from ..shared import fleettype_enum as shared_fleettype_enum
from ..shared import fleetstate_enum as shared_fleetstate_enum
from ..shared import streamview_enum as shared_streamview_enum
from ..shared import vpcconfig as shared_vpcconfig


@dataclass_json
@dataclasses.dataclass
class Fleet:
    r"""Fleet
    Describes a fleet.
    """
    
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    compute_capacity_status: shared_computecapacitystatus.ComputeCapacityStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComputeCapacityStatus') }})
    instance_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    state: shared_fleetstate_enum.FleetStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    created_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    disconnect_timeout_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisconnectTimeoutInSeconds') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    domain_join_info: Optional[shared_domainjoininfo.DomainJoinInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainJoinInfo') }})
    enable_default_internet_access: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableDefaultInternetAccess') }})
    fleet_errors: Optional[list[shared_fleeterror.FleetError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetErrors') }})
    fleet_type: Optional[shared_fleettype_enum.FleetTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetType') }})
    iam_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamRoleArn') }})
    idle_disconnect_timeout_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdleDisconnectTimeoutInSeconds') }})
    image_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageArn') }})
    image_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageName') }})
    max_user_duration_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxUserDurationInSeconds') }})
    stream_view: Optional[shared_streamview_enum.StreamViewEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamView') }})
    vpc_config: Optional[shared_vpcconfig.VpcConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    
