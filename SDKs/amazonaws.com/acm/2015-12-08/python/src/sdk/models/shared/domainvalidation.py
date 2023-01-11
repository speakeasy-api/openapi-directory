import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcerecord as shared_resourcerecord
from ..shared import validationmethod_enum as shared_validationmethod_enum
from ..shared import domainstatus_enum as shared_domainstatus_enum


@dataclass_json
@dataclasses.dataclass
class DomainValidation:
    r"""DomainValidation
    Contains information about the validation of each domain name in the certificate.
    """
    
    domain_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    resource_record: Optional[shared_resourcerecord.ResourceRecord] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceRecord') }})
    validation_domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationDomain') }})
    validation_emails: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationEmails') }})
    validation_method: Optional[shared_validationmethod_enum.ValidationMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationMethod') }})
    validation_status: Optional[shared_domainstatus_enum.DomainStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationStatus') }})
    
