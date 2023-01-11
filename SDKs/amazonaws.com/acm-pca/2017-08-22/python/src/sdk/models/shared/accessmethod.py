import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accessmethodtype_enum as shared_accessmethodtype_enum


@dataclass_json
@dataclasses.dataclass
class AccessMethod:
    r"""AccessMethod
    Describes the type and format of extension access. Only one of <code>CustomObjectIdentifier</code> or <code>AccessMethodType</code> may be provided. Providing both results in <code>InvalidArgsException</code>.
    """
    
    access_method_type: Optional[shared_accessmethodtype_enum.AccessMethodTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessMethodType') }})
    custom_object_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomObjectIdentifier') }})
    
