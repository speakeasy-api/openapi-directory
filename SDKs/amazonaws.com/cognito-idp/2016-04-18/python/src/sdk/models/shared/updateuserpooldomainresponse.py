import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpdateUserPoolDomainResponse:
    r"""UpdateUserPoolDomainResponse
    The UpdateUserPoolDomain response output.
    """
    
    cloud_front_domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudFrontDomain') }})
    
