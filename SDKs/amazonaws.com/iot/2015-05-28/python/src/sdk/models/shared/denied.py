import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import explicitdeny as shared_explicitdeny
from ..shared import implicitdeny as shared_implicitdeny


@dataclass_json
@dataclasses.dataclass
class Denied:
    r"""Denied
    Contains information that denied the authorization.
    """
    
    explicit_deny: Optional[shared_explicitdeny.ExplicitDeny] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explicitDeny') }})
    implicit_deny: Optional[shared_implicitdeny.ImplicitDeny] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('implicitDeny') }})
    
