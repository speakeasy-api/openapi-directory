import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import objectstorageserverprotocol_enum as shared_objectstorageserverprotocol_enum
from ..shared import taglistentry as shared_taglistentry


@dataclass_json
@dataclasses.dataclass
class CreateLocationObjectStorageRequest:
    r"""CreateLocationObjectStorageRequest
    CreateLocationObjectStorageRequest
    """
    
    agent_arns: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentArns') }})
    bucket_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketName') }})
    server_hostname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerHostname') }})
    access_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessKey') }})
    secret_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretKey') }})
    server_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerPort') }})
    server_protocol: Optional[shared_objectstorageserverprotocol_enum.ObjectStorageServerProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerProtocol') }})
    subdirectory: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subdirectory') }})
    tags: Optional[list[shared_taglistentry.TagListEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
