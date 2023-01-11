import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import classificationtypeupdate as shared_classificationtypeupdate


@dataclass_json
@dataclasses.dataclass
class S3ResourceClassificationUpdate:
    r"""S3ResourceClassificationUpdate
    The S3 resources whose classification types you want to update. This data type is used as a request parameter in the UpdateS3Resources action. 
    """
    
    bucket_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    classification_type_update: shared_classificationtypeupdate.ClassificationTypeUpdate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('classificationTypeUpdate') }})
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    
