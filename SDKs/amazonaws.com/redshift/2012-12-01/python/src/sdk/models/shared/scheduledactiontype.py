import dataclasses
from typing import Optional
from ..shared import pauseclustermessage as shared_pauseclustermessage
from ..shared import resizeclustermessage as shared_resizeclustermessage
from ..shared import resumeclustermessage as shared_resumeclustermessage


@dataclasses.dataclass
class ScheduledActionType:
    r"""ScheduledActionType
    The action type that specifies an Amazon Redshift API operation that is supported by the Amazon Redshift scheduler. 
    """
    
    pause_cluster: Optional[shared_pauseclustermessage.PauseClusterMessage] = dataclasses.field(default=None)
    resize_cluster: Optional[shared_resizeclustermessage.ResizeClusterMessage] = dataclasses.field(default=None)
    resume_cluster: Optional[shared_resumeclustermessage.ResumeClusterMessage] = dataclasses.field(default=None)
    
