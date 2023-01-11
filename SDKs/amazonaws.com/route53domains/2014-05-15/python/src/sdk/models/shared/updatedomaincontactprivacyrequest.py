import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpdateDomainContactPrivacyRequest:
    r"""UpdateDomainContactPrivacyRequest
    The UpdateDomainContactPrivacy request includes the following elements.
    """
    
    domain_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    admin_privacy: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdminPrivacy') }})
    registrant_privacy: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistrantPrivacy') }})
    tech_privacy: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TechPrivacy') }})
    
