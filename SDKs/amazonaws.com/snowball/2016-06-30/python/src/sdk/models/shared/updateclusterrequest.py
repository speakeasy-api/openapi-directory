import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notification as shared_notification
from ..shared import ondeviceserviceconfiguration as shared_ondeviceserviceconfiguration
from ..shared import jobresource as shared_jobresource
from ..shared import shippingoption_enum as shared_shippingoption_enum


@dataclass_json
@dataclasses.dataclass
class UpdateClusterRequest:
    cluster_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterId') }})
    address_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressId') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    forwarding_address_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForwardingAddressId') }})
    notification: Optional[shared_notification.Notification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notification') }})
    on_device_service_configuration: Optional[shared_ondeviceserviceconfiguration.OnDeviceServiceConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnDeviceServiceConfiguration') }})
    resources: Optional[shared_jobresource.JobResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    shipping_option: Optional[shared_shippingoption_enum.ShippingOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShippingOption') }})
    
