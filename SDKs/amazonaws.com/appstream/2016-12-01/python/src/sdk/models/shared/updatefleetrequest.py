import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fleetattribute_enum as shared_fleetattribute_enum
from ..shared import computecapacity as shared_computecapacity
from ..shared import domainjoininfo as shared_domainjoininfo
from ..shared import streamview_enum as shared_streamview_enum
from ..shared import vpcconfig as shared_vpcconfig


@dataclass_json
@dataclasses.dataclass
class UpdateFleetRequest:
    attributes_to_delete: Optional[list[shared_fleetattribute_enum.FleetAttributeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributesToDelete') }})
    compute_capacity: Optional[shared_computecapacity.ComputeCapacity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComputeCapacity') }})
    delete_vpc_config: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteVpcConfig') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    disconnect_timeout_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisconnectTimeoutInSeconds') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    domain_join_info: Optional[shared_domainjoininfo.DomainJoinInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainJoinInfo') }})
    enable_default_internet_access: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableDefaultInternetAccess') }})
    iam_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamRoleArn') }})
    idle_disconnect_timeout_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdleDisconnectTimeoutInSeconds') }})
    image_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageArn') }})
    image_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageName') }})
    instance_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    max_user_duration_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxUserDurationInSeconds') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    stream_view: Optional[shared_streamview_enum.StreamViewEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamView') }})
    vpc_config: Optional[shared_vpcconfig.VpcConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    
