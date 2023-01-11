import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchgetlinkattributesresponse as shared_batchgetlinkattributesresponse
from ..shared import batchgetobjectattributesresponse as shared_batchgetobjectattributesresponse
from ..shared import batchgetobjectinformationresponse as shared_batchgetobjectinformationresponse
from ..shared import batchlistattachedindicesresponse as shared_batchlistattachedindicesresponse
from ..shared import batchlistincomingtypedlinksresponse as shared_batchlistincomingtypedlinksresponse
from ..shared import batchlistindexresponse as shared_batchlistindexresponse
from ..shared import batchlistobjectattributesresponse as shared_batchlistobjectattributesresponse
from ..shared import batchlistobjectchildrenresponse as shared_batchlistobjectchildrenresponse
from ..shared import batchlistobjectparentpathsresponse as shared_batchlistobjectparentpathsresponse
from ..shared import batchlistobjectpoliciesresponse as shared_batchlistobjectpoliciesresponse
from ..shared import batchlistoutgoingtypedlinksresponse as shared_batchlistoutgoingtypedlinksresponse
from ..shared import batchlistpolicyattachmentsresponse as shared_batchlistpolicyattachmentsresponse
from ..shared import batchlookuppolicyresponse as shared_batchlookuppolicyresponse


@dataclass_json
@dataclasses.dataclass
class BatchReadSuccessfulResponse:
    r"""BatchReadSuccessfulResponse
    Represents the output of a <code>BatchRead</code> success response operation.
    """
    
    get_link_attributes: Optional[shared_batchgetlinkattributesresponse.BatchGetLinkAttributesResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GetLinkAttributes') }})
    get_object_attributes: Optional[shared_batchgetobjectattributesresponse.BatchGetObjectAttributesResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GetObjectAttributes') }})
    get_object_information: Optional[shared_batchgetobjectinformationresponse.BatchGetObjectInformationResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GetObjectInformation') }})
    list_attached_indices: Optional[shared_batchlistattachedindicesresponse.BatchListAttachedIndicesResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListAttachedIndices') }})
    list_incoming_typed_links: Optional[shared_batchlistincomingtypedlinksresponse.BatchListIncomingTypedLinksResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListIncomingTypedLinks') }})
    list_index: Optional[shared_batchlistindexresponse.BatchListIndexResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListIndex') }})
    list_object_attributes: Optional[shared_batchlistobjectattributesresponse.BatchListObjectAttributesResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListObjectAttributes') }})
    list_object_children: Optional[shared_batchlistobjectchildrenresponse.BatchListObjectChildrenResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListObjectChildren') }})
    list_object_parent_paths: Optional[shared_batchlistobjectparentpathsresponse.BatchListObjectParentPathsResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListObjectParentPaths') }})
    list_object_policies: Optional[shared_batchlistobjectpoliciesresponse.BatchListObjectPoliciesResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListObjectPolicies') }})
    list_outgoing_typed_links: Optional[shared_batchlistoutgoingtypedlinksresponse.BatchListOutgoingTypedLinksResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListOutgoingTypedLinks') }})
    list_policy_attachments: Optional[shared_batchlistpolicyattachmentsresponse.BatchListPolicyAttachmentsResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListPolicyAttachments') }})
    lookup_policy: Optional[shared_batchlookuppolicyresponse.BatchLookupPolicyResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LookupPolicy') }})
    
