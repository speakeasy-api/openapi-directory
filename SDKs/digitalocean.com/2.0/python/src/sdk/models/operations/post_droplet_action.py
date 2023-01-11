import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class PostDropletActionPathParams:
    droplet_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'droplet_id', 'style': 'simple', 'explode': False }})
    
class PostDropletActionRequestBody1TypeEnum(str, Enum):
    ENABLE_BACKUPS = "enable_backups"
    DISABLE_BACKUPS = "disable_backups"
    REBOOT = "reboot"
    POWER_CYCLE = "power_cycle"
    SHUTDOWN = "shutdown"
    POWER_OFF = "power_off"
    POWER_ON = "power_on"
    RESTORE = "restore"
    PASSWORD_RESET = "password_reset"
    RESIZE = "resize"
    REBUILD = "rebuild"
    RENAME = "rename"
    CHANGE_KERNEL = "change_kernel"
    ENABLE_IPV6 = "enable_ipv6"
    SNAPSHOT = "snapshot"


@dataclass_json
@dataclasses.dataclass
class PostDropletActionRequestBody1:
    r"""PostDropletActionRequestBody1
    Specifies the action that will be taken on the Droplet.
    """
    
    type: PostDropletActionRequestBody1TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostDropletActionRequestBody2TypeEnum(str, Enum):
    ENABLE_BACKUPS = "enable_backups"
    DISABLE_BACKUPS = "disable_backups"
    REBOOT = "reboot"
    POWER_CYCLE = "power_cycle"
    SHUTDOWN = "shutdown"
    POWER_OFF = "power_off"
    POWER_ON = "power_on"
    RESTORE = "restore"
    PASSWORD_RESET = "password_reset"
    RESIZE = "resize"
    REBUILD = "rebuild"
    RENAME = "rename"
    CHANGE_KERNEL = "change_kernel"
    ENABLE_IPV6 = "enable_ipv6"
    SNAPSHOT = "snapshot"


@dataclass_json
@dataclasses.dataclass
class PostDropletActionRequestBody2:
    r"""PostDropletActionRequestBody2
    Specifies the action that will be taken on the Droplet.
    """
    
    type: PostDropletActionRequestBody2TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    image: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    
class PostDropletActionRequestBody3TypeEnum(str, Enum):
    ENABLE_BACKUPS = "enable_backups"
    DISABLE_BACKUPS = "disable_backups"
    REBOOT = "reboot"
    POWER_CYCLE = "power_cycle"
    SHUTDOWN = "shutdown"
    POWER_OFF = "power_off"
    POWER_ON = "power_on"
    RESTORE = "restore"
    PASSWORD_RESET = "password_reset"
    RESIZE = "resize"
    REBUILD = "rebuild"
    RENAME = "rename"
    CHANGE_KERNEL = "change_kernel"
    ENABLE_IPV6 = "enable_ipv6"
    SNAPSHOT = "snapshot"


@dataclass_json
@dataclasses.dataclass
class PostDropletActionRequestBody3:
    r"""PostDropletActionRequestBody3
    Specifies the action that will be taken on the Droplet.
    """
    
    type: PostDropletActionRequestBody3TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    disk: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk') }})
    size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    
class PostDropletActionRequestBody4TypeEnum(str, Enum):
    ENABLE_BACKUPS = "enable_backups"
    DISABLE_BACKUPS = "disable_backups"
    REBOOT = "reboot"
    POWER_CYCLE = "power_cycle"
    SHUTDOWN = "shutdown"
    POWER_OFF = "power_off"
    POWER_ON = "power_on"
    RESTORE = "restore"
    PASSWORD_RESET = "password_reset"
    RESIZE = "resize"
    REBUILD = "rebuild"
    RENAME = "rename"
    CHANGE_KERNEL = "change_kernel"
    ENABLE_IPV6 = "enable_ipv6"
    SNAPSHOT = "snapshot"


@dataclass_json
@dataclasses.dataclass
class PostDropletActionRequestBody4:
    r"""PostDropletActionRequestBody4
    Specifies the action that will be taken on the Droplet.
    """
    
    type: PostDropletActionRequestBody4TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    image: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    
class PostDropletActionRequestBody5TypeEnum(str, Enum):
    ENABLE_BACKUPS = "enable_backups"
    DISABLE_BACKUPS = "disable_backups"
    REBOOT = "reboot"
    POWER_CYCLE = "power_cycle"
    SHUTDOWN = "shutdown"
    POWER_OFF = "power_off"
    POWER_ON = "power_on"
    RESTORE = "restore"
    PASSWORD_RESET = "password_reset"
    RESIZE = "resize"
    REBUILD = "rebuild"
    RENAME = "rename"
    CHANGE_KERNEL = "change_kernel"
    ENABLE_IPV6 = "enable_ipv6"
    SNAPSHOT = "snapshot"


@dataclass_json
@dataclasses.dataclass
class PostDropletActionRequestBody5:
    r"""PostDropletActionRequestBody5
    Specifies the action that will be taken on the Droplet.
    """
    
    type: PostDropletActionRequestBody5TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class PostDropletActionRequestBody6TypeEnum(str, Enum):
    ENABLE_BACKUPS = "enable_backups"
    DISABLE_BACKUPS = "disable_backups"
    REBOOT = "reboot"
    POWER_CYCLE = "power_cycle"
    SHUTDOWN = "shutdown"
    POWER_OFF = "power_off"
    POWER_ON = "power_on"
    RESTORE = "restore"
    PASSWORD_RESET = "password_reset"
    RESIZE = "resize"
    REBUILD = "rebuild"
    RENAME = "rename"
    CHANGE_KERNEL = "change_kernel"
    ENABLE_IPV6 = "enable_ipv6"
    SNAPSHOT = "snapshot"


@dataclass_json
@dataclasses.dataclass
class PostDropletActionRequestBody6:
    r"""PostDropletActionRequestBody6
    Specifies the action that will be taken on the Droplet.
    """
    
    type: PostDropletActionRequestBody6TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    kernel: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kernel') }})
    
class PostDropletActionRequestBody7TypeEnum(str, Enum):
    ENABLE_BACKUPS = "enable_backups"
    DISABLE_BACKUPS = "disable_backups"
    REBOOT = "reboot"
    POWER_CYCLE = "power_cycle"
    SHUTDOWN = "shutdown"
    POWER_OFF = "power_off"
    POWER_ON = "power_on"
    RESTORE = "restore"
    PASSWORD_RESET = "password_reset"
    RESIZE = "resize"
    REBUILD = "rebuild"
    RENAME = "rename"
    CHANGE_KERNEL = "change_kernel"
    ENABLE_IPV6 = "enable_ipv6"
    SNAPSHOT = "snapshot"


@dataclass_json
@dataclasses.dataclass
class PostDropletActionRequestBody7:
    r"""PostDropletActionRequestBody7
    Specifies the action that will be taken on the Droplet.
    """
    
    type: PostDropletActionRequestBody7TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PostDropletAction401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class PostDropletActionRequest:
    path_params: PostDropletActionPathParams = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostDropletActionResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_droplet_action_201_application_json_any: Optional[Any] = dataclasses.field(default=None)
    post_droplet_action_401_application_json_object: Optional[PostDropletAction401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
