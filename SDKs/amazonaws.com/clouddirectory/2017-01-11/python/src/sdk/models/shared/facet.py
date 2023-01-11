import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import facetstyle_enum as shared_facetstyle_enum
from ..shared import objecttype_enum as shared_objecttype_enum


@dataclass_json
@dataclasses.dataclass
class Facet:
    r"""Facet
    A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <code> <a>Rule</a>s</code>, and <code>ObjectTypes</code>. See <a href=\"https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_whatarefacets.html\">Facets</a> for more information.
    """
    
    facet_style: Optional[shared_facetstyle_enum.FacetStyleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FacetStyle') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    object_type: Optional[shared_objecttype_enum.ObjectTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectType') }})
    
