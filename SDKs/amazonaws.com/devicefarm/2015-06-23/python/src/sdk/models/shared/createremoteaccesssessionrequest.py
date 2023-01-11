import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createremoteaccesssessionconfiguration as shared_createremoteaccesssessionconfiguration
from ..shared import interactionmode_enum as shared_interactionmode_enum


@dataclass_json
@dataclasses.dataclass
class CreateRemoteAccessSessionRequest:
    r"""CreateRemoteAccessSessionRequest
    Creates and submits a request to start a remote access session.
    """
    
    device_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceArn') }})
    project_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectArn') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    configuration: Optional[shared_createremoteaccesssessionconfiguration.CreateRemoteAccessSessionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    instance_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceArn') }})
    interaction_mode: Optional[shared_interactionmode_enum.InteractionModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactionMode') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    remote_debug_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteDebugEnabled') }})
    remote_record_app_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteRecordAppArn') }})
    remote_record_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteRecordEnabled') }})
    skip_app_resign: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipAppResign') }})
    ssh_public_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sshPublicKey') }})
    
