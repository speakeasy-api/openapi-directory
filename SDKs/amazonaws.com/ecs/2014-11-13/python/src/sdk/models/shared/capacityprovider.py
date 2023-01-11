import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autoscalinggroupprovider as shared_autoscalinggroupprovider
from ..shared import capacityproviderstatus_enum as shared_capacityproviderstatus_enum
from ..shared import tag as shared_tag
from ..shared import capacityproviderupdatestatus_enum as shared_capacityproviderupdatestatus_enum


@dataclass_json
@dataclasses.dataclass
class CapacityProvider:
    r"""CapacityProvider
    The details of a capacity provider.
    """
    
    auto_scaling_group_provider: Optional[shared_autoscalinggroupprovider.AutoScalingGroupProvider] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroupProvider') }})
    capacity_provider_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityProviderArn') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[shared_capacityproviderstatus_enum.CapacityProviderStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    update_status: Optional[shared_capacityproviderupdatestatus_enum.CapacityProviderUpdateStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateStatus') }})
    update_status_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateStatusReason') }})
    
