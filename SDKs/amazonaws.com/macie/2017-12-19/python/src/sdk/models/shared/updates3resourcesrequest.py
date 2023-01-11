import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3resourceclassificationupdate as shared_s3resourceclassificationupdate


@dataclass_json
@dataclasses.dataclass
class UpdateS3ResourcesRequest:
    s3_resources_update: list[shared_s3resourceclassificationupdate.S3ResourceClassificationUpdate] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3ResourcesUpdate') }})
    member_account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberAccountId') }})
    
