import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3resource as shared_s3resource


@dataclass_json
@dataclasses.dataclass
class DisassociateS3ResourcesRequest:
    associated_s3_resources: list[shared_s3resource.S3Resource] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatedS3Resources') }})
    member_account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberAccountId') }})
    
