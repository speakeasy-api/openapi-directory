import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GroupCertificateAuthorityProperties:
    r"""GroupCertificateAuthorityProperties
    Information about a certificate authority for a group.
    """
    
    group_certificate_authority_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupCertificateAuthorityArn') }})
    group_certificate_authority_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupCertificateAuthorityId') }})
    
