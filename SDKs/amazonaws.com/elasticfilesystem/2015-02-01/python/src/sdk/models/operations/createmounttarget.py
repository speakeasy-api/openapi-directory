import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mounttargetdescription as shared_mounttargetdescription


@dataclasses.dataclass
class CreateMountTargetHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateMountTargetRequestBody:
    file_system_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemId') }})
    subnet_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetId') }})
    ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddress') }})
    security_groups: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroups') }})
    

@dataclasses.dataclass
class CreateMountTargetRequest:
    headers: CreateMountTargetHeaders = dataclasses.field()
    request: CreateMountTargetRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateMountTargetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    availability_zones_mismatch: Optional[Any] = dataclasses.field(default=None)
    bad_request: Optional[Any] = dataclasses.field(default=None)
    file_system_not_found: Optional[Any] = dataclasses.field(default=None)
    incorrect_file_system_life_cycle_state: Optional[Any] = dataclasses.field(default=None)
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    ip_address_in_use: Optional[Any] = dataclasses.field(default=None)
    mount_target_conflict: Optional[Any] = dataclasses.field(default=None)
    mount_target_description: Optional[shared_mounttargetdescription.MountTargetDescription] = dataclasses.field(default=None)
    network_interface_limit_exceeded: Optional[Any] = dataclasses.field(default=None)
    no_free_addresses_in_subnet: Optional[Any] = dataclasses.field(default=None)
    security_group_limit_exceeded: Optional[Any] = dataclasses.field(default=None)
    security_group_not_found: Optional[Any] = dataclasses.field(default=None)
    subnet_not_found: Optional[Any] = dataclasses.field(default=None)
    unsupported_availability_zone: Optional[Any] = dataclasses.field(default=None)
    
