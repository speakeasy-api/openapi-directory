import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domainentry as shared_domainentry


@dataclass_json
@dataclasses.dataclass
class UpdateDomainEntryRequest:
    domain_entry: shared_domainentry.DomainEntry = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainEntry') }})
    domain_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    
