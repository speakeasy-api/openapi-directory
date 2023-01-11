import dataclasses
from typing import Optional
from enum import Enum
from ..shared import policyownerentitytype_enum as shared_policyownerentitytype_enum


@dataclasses.dataclass
class EntityInfo:
    r"""EntityInfo
    <p>Contains details about the specified entity (user or role).</p> <p>This data type is an element of the <a>EntityDetails</a> object.</p>
    """
    
    arn: str = dataclasses.field()
    id: str = dataclasses.field()
    name: str = dataclasses.field()
    type: shared_policyownerentitytype_enum.PolicyOwnerEntityTypeEnum = dataclasses.field()
    path: Optional[str] = dataclasses.field(default=None)
    
