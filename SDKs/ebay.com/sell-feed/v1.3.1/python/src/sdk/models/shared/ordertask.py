import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderfiltercriteria as shared_orderfiltercriteria
from ..shared import uploadsummary as shared_uploadsummary


@dataclass_json
@dataclasses.dataclass
class OrderTask:
    r"""OrderTask
    The type that defines the fields for the getOrderTask response.
    """
    
    completion_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionDate') }})
    creation_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate') }})
    detail_href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailHref') }})
    feed_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedType') }})
    filter_criteria: Optional[shared_orderfiltercriteria.OrderFilterCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterCriteria') }})
    schema_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaVersion') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    task_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskId') }})
    upload_summary: Optional[shared_uploadsummary.UploadSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadSummary') }})
    
