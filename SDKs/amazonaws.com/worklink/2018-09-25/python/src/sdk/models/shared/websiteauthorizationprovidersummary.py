import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authorizationprovidertype_enum as shared_authorizationprovidertype_enum


@dataclass_json
@dataclasses.dataclass
class WebsiteAuthorizationProviderSummary:
    r"""WebsiteAuthorizationProviderSummary
    The summary of the website authorization provider.
    """
    
    authorization_provider_type: shared_authorizationprovidertype_enum.AuthorizationProviderTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizationProviderType') }})
    authorization_provider_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizationProviderId') }})
    created_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    domain_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    
