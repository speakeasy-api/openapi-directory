import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchaddfacettoobject as shared_batchaddfacettoobject
from ..shared import batchattachobject as shared_batchattachobject
from ..shared import batchattachpolicy as shared_batchattachpolicy
from ..shared import batchattachtoindex as shared_batchattachtoindex
from ..shared import batchattachtypedlink as shared_batchattachtypedlink
from ..shared import batchcreateindex as shared_batchcreateindex
from ..shared import batchcreateobject as shared_batchcreateobject
from ..shared import batchdeleteobject as shared_batchdeleteobject
from ..shared import batchdetachfromindex as shared_batchdetachfromindex
from ..shared import batchdetachobject as shared_batchdetachobject
from ..shared import batchdetachpolicy as shared_batchdetachpolicy
from ..shared import batchdetachtypedlink as shared_batchdetachtypedlink
from ..shared import batchremovefacetfromobject as shared_batchremovefacetfromobject
from ..shared import batchupdatelinkattributes as shared_batchupdatelinkattributes
from ..shared import batchupdateobjectattributes as shared_batchupdateobjectattributes


@dataclass_json
@dataclasses.dataclass
class BatchWriteOperation:
    r"""BatchWriteOperation
    Represents the output of a <code>BatchWrite</code> operation. 
    """
    
    add_facet_to_object: Optional[shared_batchaddfacettoobject.BatchAddFacetToObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddFacetToObject') }})
    attach_object: Optional[shared_batchattachobject.BatchAttachObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachObject') }})
    attach_policy: Optional[shared_batchattachpolicy.BatchAttachPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachPolicy') }})
    attach_to_index: Optional[shared_batchattachtoindex.BatchAttachToIndex] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachToIndex') }})
    attach_typed_link: Optional[shared_batchattachtypedlink.BatchAttachTypedLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachTypedLink') }})
    create_index: Optional[shared_batchcreateindex.BatchCreateIndex] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateIndex') }})
    create_object: Optional[shared_batchcreateobject.BatchCreateObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateObject') }})
    delete_object: Optional[shared_batchdeleteobject.BatchDeleteObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteObject') }})
    detach_from_index: Optional[shared_batchdetachfromindex.BatchDetachFromIndex] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetachFromIndex') }})
    detach_object: Optional[shared_batchdetachobject.BatchDetachObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetachObject') }})
    detach_policy: Optional[shared_batchdetachpolicy.BatchDetachPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetachPolicy') }})
    detach_typed_link: Optional[shared_batchdetachtypedlink.BatchDetachTypedLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetachTypedLink') }})
    remove_facet_from_object: Optional[shared_batchremovefacetfromobject.BatchRemoveFacetFromObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoveFacetFromObject') }})
    update_link_attributes: Optional[shared_batchupdatelinkattributes.BatchUpdateLinkAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateLinkAttributes') }})
    update_object_attributes: Optional[shared_batchupdateobjectattributes.BatchUpdateObjectAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateObjectAttributes') }})
    
