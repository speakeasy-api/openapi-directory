import dataclasses
from enum import Enum

class ScriptTypeEnum(str, Enum):
    SHELL_SCRIPT = "SHELL_SCRIPT"
    POWERSHELL_SCRIPT = "POWERSHELL_SCRIPT"

