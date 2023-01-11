import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchattachobjectresponse as shared_batchattachobjectresponse
from ..shared import batchattachtoindexresponse as shared_batchattachtoindexresponse
from ..shared import batchattachtypedlinkresponse as shared_batchattachtypedlinkresponse
from ..shared import batchcreateindexresponse as shared_batchcreateindexresponse
from ..shared import batchcreateobjectresponse as shared_batchcreateobjectresponse
from ..shared import batchdetachfromindexresponse as shared_batchdetachfromindexresponse
from ..shared import batchdetachobjectresponse as shared_batchdetachobjectresponse
from ..shared import batchupdateobjectattributesresponse as shared_batchupdateobjectattributesresponse


@dataclass_json
@dataclasses.dataclass
class BatchWriteOperationResponse:
    r"""BatchWriteOperationResponse
    Represents the output of a <code>BatchWrite</code> response operation.
    """
    
    add_facet_to_object: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddFacetToObject') }})
    attach_object: Optional[shared_batchattachobjectresponse.BatchAttachObjectResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachObject') }})
    attach_policy: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachPolicy') }})
    attach_to_index: Optional[shared_batchattachtoindexresponse.BatchAttachToIndexResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachToIndex') }})
    attach_typed_link: Optional[shared_batchattachtypedlinkresponse.BatchAttachTypedLinkResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachTypedLink') }})
    create_index: Optional[shared_batchcreateindexresponse.BatchCreateIndexResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateIndex') }})
    create_object: Optional[shared_batchcreateobjectresponse.BatchCreateObjectResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateObject') }})
    delete_object: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteObject') }})
    detach_from_index: Optional[shared_batchdetachfromindexresponse.BatchDetachFromIndexResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetachFromIndex') }})
    detach_object: Optional[shared_batchdetachobjectresponse.BatchDetachObjectResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetachObject') }})
    detach_policy: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetachPolicy') }})
    detach_typed_link: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetachTypedLink') }})
    remove_facet_from_object: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoveFacetFromObject') }})
    update_link_attributes: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateLinkAttributes') }})
    update_object_attributes: Optional[shared_batchupdateobjectattributesresponse.BatchUpdateObjectAttributesResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateObjectAttributes') }})
    
