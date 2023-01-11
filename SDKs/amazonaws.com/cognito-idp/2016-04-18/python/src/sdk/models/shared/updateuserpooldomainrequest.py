import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customdomainconfigtype as shared_customdomainconfigtype


@dataclass_json
@dataclasses.dataclass
class UpdateUserPoolDomainRequest:
    r"""UpdateUserPoolDomainRequest
    The UpdateUserPoolDomain request input.
    """
    
    custom_domain_config: shared_customdomainconfigtype.CustomDomainConfigType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomDomainConfig') }})
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domain') }})
    user_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    
