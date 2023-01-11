import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3continuousclassificationtype_enum as shared_s3continuousclassificationtype_enum
from ..shared import s3onetimeclassificationtype_enum as shared_s3onetimeclassificationtype_enum


@dataclass_json
@dataclasses.dataclass
class ClassificationType:
    r"""ClassificationType
    The classification type that Amazon Macie Classic applies to the associated S3 resources. 
    """
    
    continuous: shared_s3continuousclassificationtype_enum.S3ContinuousClassificationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('continuous') }})
    one_time: shared_s3onetimeclassificationtype_enum.S3OneTimeClassificationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneTime') }})
    
