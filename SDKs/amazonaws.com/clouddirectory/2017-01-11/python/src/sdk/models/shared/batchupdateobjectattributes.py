import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import objectattributeupdate as shared_objectattributeupdate
from ..shared import objectreference as shared_objectreference


@dataclass_json
@dataclasses.dataclass
class BatchUpdateObjectAttributes:
    r"""BatchUpdateObjectAttributes
    Represents the output of a <code>BatchUpdate</code> operation. 
    """
    
    attribute_updates: list[shared_objectattributeupdate.ObjectAttributeUpdate] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeUpdates') }})
    object_reference: shared_objectreference.ObjectReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectReference') }})
    
