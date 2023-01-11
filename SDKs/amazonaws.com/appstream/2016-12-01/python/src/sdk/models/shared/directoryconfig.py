import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serviceaccountcredentials as shared_serviceaccountcredentials


@dataclass_json
@dataclasses.dataclass
class DirectoryConfig:
    r"""DirectoryConfig
    Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
    """
    
    directory_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryName') }})
    created_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    organizational_unit_distinguished_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationalUnitDistinguishedNames') }})
    service_account_credentials: Optional[shared_serviceaccountcredentials.ServiceAccountCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceAccountCredentials') }})
    
