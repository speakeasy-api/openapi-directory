import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3resourceclassification as shared_s3resourceclassification


@dataclass_json
@dataclasses.dataclass
class AssociateS3ResourcesRequest:
    s3_resources: list[shared_s3resourceclassification.S3ResourceClassification] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Resources') }})
    member_account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberAccountId') }})
    
