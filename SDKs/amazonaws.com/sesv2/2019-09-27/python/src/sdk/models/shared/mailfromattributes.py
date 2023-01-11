import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import behavioronmxfailure_enum as shared_behavioronmxfailure_enum
from ..shared import mailfromdomainstatus_enum as shared_mailfromdomainstatus_enum


@dataclass_json
@dataclasses.dataclass
class MailFromAttributes:
    r"""MailFromAttributes
    A list of attributes that are associated with a MAIL FROM domain.
    """
    
    behavior_on_mx_failure: shared_behavioronmxfailure_enum.BehaviorOnMxFailureEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BehaviorOnMxFailure') }})
    mail_from_domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MailFromDomain') }})
    mail_from_domain_status: shared_mailfromdomainstatus_enum.MailFromDomainStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MailFromDomainStatus') }})
    
