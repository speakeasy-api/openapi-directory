import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributenameandvalue as shared_attributenameandvalue
from ..shared import objectreference as shared_objectreference
from ..shared import typedlinkschemaandfacetname as shared_typedlinkschemaandfacetname


@dataclass_json
@dataclasses.dataclass
class TypedLinkSpecifier:
    r"""TypedLinkSpecifier
    Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
    """
    
    identity_attribute_values: list[shared_attributenameandvalue.AttributeNameAndValue] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityAttributeValues') }})
    source_object_reference: shared_objectreference.ObjectReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceObjectReference') }})
    target_object_reference: shared_objectreference.ObjectReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetObjectReference') }})
    typed_link_facet: shared_typedlinkschemaandfacetname.TypedLinkSchemaAndFacetName = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypedLinkFacet') }})
    
