import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DomainValidationOption:
    r"""DomainValidationOption
    Contains information about the domain names that you want ACM to use to send you emails that enable you to validate domain ownership.
    """
    
    domain_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    validation_domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationDomain') }})
    
