import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accessrules as shared_accessrules


@dataclass_json
@dataclasses.dataclass
class UpdateBucketRequest:
    bucket_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    access_rules: Optional[shared_accessrules.AccessRules] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessRules') }})
    readonly_access_accounts: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readonlyAccessAccounts') }})
    versioning: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versioning') }})
    
