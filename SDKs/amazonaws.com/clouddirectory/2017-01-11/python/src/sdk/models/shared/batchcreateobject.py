import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributekeyandvalue as shared_attributekeyandvalue
from ..shared import objectreference as shared_objectreference
from ..shared import schemafacet as shared_schemafacet


@dataclass_json
@dataclasses.dataclass
class BatchCreateObject:
    r"""BatchCreateObject
    Represents the output of a <a>CreateObject</a> operation.
    """
    
    object_attribute_list: list[shared_attributekeyandvalue.AttributeKeyAndValue] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectAttributeList') }})
    schema_facet: list[shared_schemafacet.SchemaFacet] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaFacet') }})
    batch_reference_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchReferenceName') }})
    link_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LinkName') }})
    parent_reference: Optional[shared_objectreference.ObjectReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentReference') }})
    
