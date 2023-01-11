import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcerecord as shared_resourcerecord


@dataclass_json
@dataclasses.dataclass
class DomainValidationRecord:
    r"""DomainValidationRecord
    Describes the domain validation records of an Amazon Lightsail SSL/TLS certificate.
    """
    
    domain_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    resource_record: Optional[shared_resourcerecord.ResourceRecord] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceRecord') }})
    
