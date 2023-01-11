import dataclasses
from typing import Optional


@dataclasses.dataclass
class PendingCloudwatchLogsExports:
    r"""PendingCloudwatchLogsExports
    A list of the log types whose configuration is still pending. These log types are in the process of being activated or deactivated.
    """
    
    log_types_to_disable: Optional[list[str]] = dataclasses.field(default=None)
    log_types_to_enable: Optional[list[str]] = dataclasses.field(default=None)
    
