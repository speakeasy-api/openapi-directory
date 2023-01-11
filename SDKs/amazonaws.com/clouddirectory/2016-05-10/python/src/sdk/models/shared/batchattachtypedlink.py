import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributenameandvalue as shared_attributenameandvalue
from ..shared import objectreference as shared_objectreference
from ..shared import typedlinkschemaandfacetname as shared_typedlinkschemaandfacetname


@dataclass_json
@dataclasses.dataclass
class BatchAttachTypedLink:
    r"""BatchAttachTypedLink
    Attaches a typed link to a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>AttachTypedLink</a> and <a>BatchReadRequest$Operations</a>.
    """
    
    attributes: list[shared_attributenameandvalue.AttributeNameAndValue] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    source_object_reference: shared_objectreference.ObjectReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceObjectReference') }})
    target_object_reference: shared_objectreference.ObjectReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetObjectReference') }})
    typed_link_facet: shared_typedlinkschemaandfacetname.TypedLinkSchemaAndFacetName = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypedLinkFacet') }})
    
