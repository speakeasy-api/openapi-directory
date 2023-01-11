import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import typedlinkattributerange as shared_typedlinkattributerange
from ..shared import typedlinkschemaandfacetname as shared_typedlinkschemaandfacetname
from ..shared import objectreference as shared_objectreference


@dataclass_json
@dataclasses.dataclass
class BatchListOutgoingTypedLinks:
    r"""BatchListOutgoingTypedLinks
    Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListOutgoingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.
    """
    
    object_reference: shared_objectreference.ObjectReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectReference') }})
    filter_attribute_ranges: Optional[list[shared_typedlinkattributerange.TypedLinkAttributeRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterAttributeRanges') }})
    filter_typed_link: Optional[shared_typedlinkschemaandfacetname.TypedLinkSchemaAndFacetName] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterTypedLink') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
