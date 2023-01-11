import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchgetlinkattributes as shared_batchgetlinkattributes
from ..shared import batchgetobjectattributes as shared_batchgetobjectattributes
from ..shared import batchgetobjectinformation as shared_batchgetobjectinformation
from ..shared import batchlistattachedindices as shared_batchlistattachedindices
from ..shared import batchlistincomingtypedlinks as shared_batchlistincomingtypedlinks
from ..shared import batchlistindex as shared_batchlistindex
from ..shared import batchlistobjectattributes as shared_batchlistobjectattributes
from ..shared import batchlistobjectchildren as shared_batchlistobjectchildren
from ..shared import batchlistobjectparentpaths as shared_batchlistobjectparentpaths
from ..shared import batchlistobjectpolicies as shared_batchlistobjectpolicies
from ..shared import batchlistoutgoingtypedlinks as shared_batchlistoutgoingtypedlinks
from ..shared import batchlistpolicyattachments as shared_batchlistpolicyattachments
from ..shared import batchlookuppolicy as shared_batchlookuppolicy


@dataclass_json
@dataclasses.dataclass
class BatchReadOperation:
    r"""BatchReadOperation
    Represents the output of a <code>BatchRead</code> operation.
    """
    
    get_link_attributes: Optional[shared_batchgetlinkattributes.BatchGetLinkAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GetLinkAttributes') }})
    get_object_attributes: Optional[shared_batchgetobjectattributes.BatchGetObjectAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GetObjectAttributes') }})
    get_object_information: Optional[shared_batchgetobjectinformation.BatchGetObjectInformation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GetObjectInformation') }})
    list_attached_indices: Optional[shared_batchlistattachedindices.BatchListAttachedIndices] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListAttachedIndices') }})
    list_incoming_typed_links: Optional[shared_batchlistincomingtypedlinks.BatchListIncomingTypedLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListIncomingTypedLinks') }})
    list_index: Optional[shared_batchlistindex.BatchListIndex] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListIndex') }})
    list_object_attributes: Optional[shared_batchlistobjectattributes.BatchListObjectAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListObjectAttributes') }})
    list_object_children: Optional[shared_batchlistobjectchildren.BatchListObjectChildren] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListObjectChildren') }})
    list_object_parent_paths: Optional[shared_batchlistobjectparentpaths.BatchListObjectParentPaths] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListObjectParentPaths') }})
    list_object_policies: Optional[shared_batchlistobjectpolicies.BatchListObjectPolicies] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListObjectPolicies') }})
    list_outgoing_typed_links: Optional[shared_batchlistoutgoingtypedlinks.BatchListOutgoingTypedLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListOutgoingTypedLinks') }})
    list_policy_attachments: Optional[shared_batchlistpolicyattachments.BatchListPolicyAttachments] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListPolicyAttachments') }})
    lookup_policy: Optional[shared_batchlookuppolicy.BatchLookupPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LookupPolicy') }})
    
