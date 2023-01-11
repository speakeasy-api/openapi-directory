import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updateactiontype_enum as shared_updateactiontype_enum
from ..shared import typedlinkattributedefinition as shared_typedlinkattributedefinition


@dataclass_json
@dataclasses.dataclass
class TypedLinkFacetAttributeUpdate:
    r"""TypedLinkFacetAttributeUpdate
    A typed link facet attribute update.
    """
    
    action: shared_updateactiontype_enum.UpdateActionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    attribute: shared_typedlinkattributedefinition.TypedLinkAttributeDefinition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attribute') }})
    
