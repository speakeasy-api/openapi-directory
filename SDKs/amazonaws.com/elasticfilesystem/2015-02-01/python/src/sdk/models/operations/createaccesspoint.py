import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import creationinfo as shared_creationinfo
from ..shared import tag as shared_tag
from ..shared import accesspointdescription as shared_accesspointdescription


@dataclasses.dataclass
class CreateAccessPointHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAccessPointRequestBodyPosixUser:
    r"""CreateAccessPointRequestBodyPosixUser
    The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.
    """
    
    gid: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Gid') }})
    secondary_gids: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryGids') }})
    uid: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Uid') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAccessPointRequestBodyRootDirectory:
    r"""CreateAccessPointRequestBodyRootDirectory
    Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's <code>RootDirectory</code> and it's subdirectories.
    """
    
    creation_info: Optional[shared_creationinfo.CreationInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationInfo') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Path') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAccessPointRequestBody:
    client_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    file_system_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemId') }})
    posix_user: Optional[CreateAccessPointRequestBodyPosixUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PosixUser') }})
    root_directory: Optional[CreateAccessPointRequestBodyRootDirectory] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootDirectory') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

@dataclasses.dataclass
class CreateAccessPointRequest:
    headers: CreateAccessPointHeaders = dataclasses.field()
    request: CreateAccessPointRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateAccessPointResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_point_already_exists: Optional[Any] = dataclasses.field(default=None)
    access_point_description: Optional[shared_accesspointdescription.AccessPointDescription] = dataclasses.field(default=None)
    access_point_limit_exceeded: Optional[Any] = dataclasses.field(default=None)
    bad_request: Optional[Any] = dataclasses.field(default=None)
    file_system_not_found: Optional[Any] = dataclasses.field(default=None)
    incorrect_file_system_life_cycle_state: Optional[Any] = dataclasses.field(default=None)
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    
