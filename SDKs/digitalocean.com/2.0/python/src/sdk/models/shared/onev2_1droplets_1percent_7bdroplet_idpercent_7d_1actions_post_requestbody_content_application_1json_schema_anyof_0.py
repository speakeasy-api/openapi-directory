import dataclasses
from typing import Any
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class Onev21droplets1Percent7BdropletIDPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum(str, Enum):
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
class Onev21droplets1Percent7BdropletIDPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0:
    r"""Onev21droplets1Percent7BdropletIDPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0
    Specifies the action that will be taken on the Droplet.
    """
    
    type: Onev21droplets1Percent7BdropletIDPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
