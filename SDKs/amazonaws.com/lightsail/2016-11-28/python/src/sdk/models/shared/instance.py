import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addon as shared_addon
from ..shared import instancehardware as shared_instancehardware
from ..shared import ipaddresstype_enum as shared_ipaddresstype_enum
from ..shared import resourcelocation as shared_resourcelocation
from ..shared import instancenetworking as shared_instancenetworking
from ..shared import resourcetype_enum as shared_resourcetype_enum
from ..shared import instancestate as shared_instancestate
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class Instance:
    r"""Instance
    Describes an instance (a virtual private server).
    """
    
    add_ons: Optional[list[shared_addon.AddOn]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addOns') }})
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    blueprint_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blueprintId') }})
    blueprint_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blueprintName') }})
    bundle_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleId') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hardware: Optional[shared_instancehardware.InstanceHardware] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hardware') }})
    ip_address_type: Optional[shared_ipaddresstype_enum.IPAddressTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddressType') }})
    ipv6_addresses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6Addresses') }})
    is_static_ip: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isStaticIp') }})
    location: Optional[shared_resourcelocation.ResourceLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    networking: Optional[shared_instancenetworking.InstanceNetworking] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networking') }})
    private_ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateIpAddress') }})
    public_ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicIpAddress') }})
    resource_type: Optional[shared_resourcetype_enum.ResourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    ssh_key_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sshKeyName') }})
    state: Optional[shared_instancestate.InstanceState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    support_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportCode') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
