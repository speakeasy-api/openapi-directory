import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributekey as shared_attributekey
from ..shared import objectreference as shared_objectreference


@dataclass_json
@dataclasses.dataclass
class BatchCreateIndex:
    r"""BatchCreateIndex
    Creates an index object inside of a <a>BatchRead</a> operation. For more information, see <a>CreateIndex</a> and <a>BatchReadRequest$Operations</a>.
    """
    
    is_unique: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsUnique') }})
    ordered_indexed_attribute_list: list[shared_attributekey.AttributeKey] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderedIndexedAttributeList') }})
    batch_reference_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchReferenceName') }})
    link_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LinkName') }})
    parent_reference: Optional[shared_objectreference.ObjectReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentReference') }})
    
