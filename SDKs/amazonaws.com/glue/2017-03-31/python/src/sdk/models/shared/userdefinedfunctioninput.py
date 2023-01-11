import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import principaltype_enum as shared_principaltype_enum
from ..shared import resourceuri as shared_resourceuri


@dataclass_json
@dataclasses.dataclass
class UserDefinedFunctionInput:
    r"""UserDefinedFunctionInput
    A structure used to create or update a user-defined function.
    """
    
    class_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClassName') }})
    function_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionName') }})
    owner_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerName') }})
    owner_type: Optional[shared_principaltype_enum.PrincipalTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerType') }})
    resource_uris: Optional[list[shared_resourceuri.ResourceURI]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceUris') }})
    
