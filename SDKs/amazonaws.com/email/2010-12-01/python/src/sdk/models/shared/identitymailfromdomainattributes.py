import dataclasses
from typing import Optional
from enum import Enum
from ..shared import behavioronmxfailure_enum as shared_behavioronmxfailure_enum
from ..shared import custommailfromstatus_enum as shared_custommailfromstatus_enum


@dataclasses.dataclass
class IdentityMailFromDomainAttributes:
    behavior_on_mx_failure: Optional[shared_behavioronmxfailure_enum.BehaviorOnMxFailureEnum] = dataclasses.field(default=None)
    mail_from_domain: Optional[str] = dataclasses.field(default=None)
    mail_from_domain_status: Optional[shared_custommailfromstatus_enum.CustomMailFromStatusEnum] = dataclasses.field(default=None)
    
