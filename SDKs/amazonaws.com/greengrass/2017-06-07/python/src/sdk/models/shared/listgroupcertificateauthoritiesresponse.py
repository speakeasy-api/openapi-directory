import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import groupcertificateauthorityproperties as shared_groupcertificateauthorityproperties


@dataclass_json
@dataclasses.dataclass
class ListGroupCertificateAuthoritiesResponse:
    group_certificate_authorities: Optional[list[shared_groupcertificateauthorityproperties.GroupCertificateAuthorityProperties]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupCertificateAuthorities') }})
    
