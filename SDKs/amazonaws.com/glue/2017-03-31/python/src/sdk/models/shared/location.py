import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codegennodearg as shared_codegennodearg


@dataclass_json
@dataclasses.dataclass
class Location:
    r"""Location
    The location of resources.
    """
    
    dynamo_db: Optional[list[shared_codegennodearg.CodeGenNodeArg]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DynamoDB') }})
    jdbc: Optional[list[shared_codegennodearg.CodeGenNodeArg]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Jdbc') }})
    s3: Optional[list[shared_codegennodearg.CodeGenNodeArg]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3') }})
    
