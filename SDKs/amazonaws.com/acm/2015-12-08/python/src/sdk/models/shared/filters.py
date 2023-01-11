import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import extendedkeyusagename_enum as shared_extendedkeyusagename_enum
from ..shared import keyalgorithm_enum as shared_keyalgorithm_enum
from ..shared import keyusagename_enum as shared_keyusagename_enum


@dataclass_json
@dataclasses.dataclass
class Filters:
    r"""Filters
    This structure can be used in the <a>ListCertificates</a> action to filter the output of the certificate list. 
    """
    
    extended_key_usage: Optional[list[shared_extendedkeyusagename_enum.ExtendedKeyUsageNameEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extendedKeyUsage') }})
    key_types: Optional[list[shared_keyalgorithm_enum.KeyAlgorithmEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyTypes') }})
    key_usage: Optional[list[shared_keyusagename_enum.KeyUsageNameEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyUsage') }})
    
