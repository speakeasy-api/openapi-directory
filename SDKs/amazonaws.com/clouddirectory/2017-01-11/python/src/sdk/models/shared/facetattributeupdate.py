import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updateactiontype_enum as shared_updateactiontype_enum
from ..shared import facetattribute as shared_facetattribute


@dataclass_json
@dataclasses.dataclass
class FacetAttributeUpdate:
    r"""FacetAttributeUpdate
    A structure that contains information used to update an attribute.
    """
    
    action: Optional[shared_updateactiontype_enum.UpdateActionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    attribute: Optional[shared_facetattribute.FacetAttribute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attribute') }})
    
