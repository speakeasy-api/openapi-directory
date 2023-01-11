import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import keyusage as shared_keyusage
from ..shared import accessdescription as shared_accessdescription


@dataclass_json
@dataclasses.dataclass
class CsrExtensions:
    r"""CsrExtensions
    Describes the certificate extensions to be added to the certificate signing request (CSR).
    """
    
    key_usage: Optional[shared_keyusage.KeyUsage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyUsage') }})
    subject_information_access: Optional[list[shared_accessdescription.AccessDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubjectInformationAccess') }})
    
