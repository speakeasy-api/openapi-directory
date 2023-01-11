import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag
from ..shared import filesystemdescription as shared_filesystemdescription


@dataclasses.dataclass
class CreateFileSystemHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateFileSystemRequestBodyPerformanceModeEnum(str, Enum):
    GENERAL_PURPOSE = "generalPurpose"
    MAX_IO = "maxIO"

class CreateFileSystemRequestBodyThroughputModeEnum(str, Enum):
    BURSTING = "bursting"
    PROVISIONED = "provisioned"


@dataclass_json
@dataclasses.dataclass
class CreateFileSystemRequestBody:
    creation_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationToken') }})
    availability_zone_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZoneName') }})
    backup: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Backup') }})
    encrypted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encrypted') }})
    kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    performance_mode: Optional[CreateFileSystemRequestBodyPerformanceModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PerformanceMode') }})
    provisioned_throughput_in_mibps: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedThroughputInMibps') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    throughput_mode: Optional[CreateFileSystemRequestBodyThroughputModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThroughputMode') }})
    

@dataclasses.dataclass
class CreateFileSystemRequest:
    headers: CreateFileSystemHeaders = dataclasses.field()
    request: CreateFileSystemRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateFileSystemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request: Optional[Any] = dataclasses.field(default=None)
    file_system_already_exists: Optional[Any] = dataclasses.field(default=None)
    file_system_description: Optional[shared_filesystemdescription.FileSystemDescription] = dataclasses.field(default=None)
    file_system_limit_exceeded: Optional[Any] = dataclasses.field(default=None)
    insufficient_throughput_capacity: Optional[Any] = dataclasses.field(default=None)
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    throughput_limit_exceeded: Optional[Any] = dataclasses.field(default=None)
    unsupported_availability_zone: Optional[Any] = dataclasses.field(default=None)
    
