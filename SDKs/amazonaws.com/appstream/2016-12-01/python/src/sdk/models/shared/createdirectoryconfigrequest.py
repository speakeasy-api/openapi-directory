import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serviceaccountcredentials as shared_serviceaccountcredentials


@dataclass_json
@dataclasses.dataclass
class CreateDirectoryConfigRequest:
    directory_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryName') }})
    organizational_unit_distinguished_names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationalUnitDistinguishedNames') }})
    service_account_credentials: Optional[shared_serviceaccountcredentials.ServiceAccountCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceAccountCredentials') }})
    
