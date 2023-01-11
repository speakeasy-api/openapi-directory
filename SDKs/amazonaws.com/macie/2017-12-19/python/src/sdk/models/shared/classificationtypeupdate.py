import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3continuousclassificationtype_enum as shared_s3continuousclassificationtype_enum
from ..shared import s3onetimeclassificationtype_enum as shared_s3onetimeclassificationtype_enum


@dataclass_json
@dataclasses.dataclass
class ClassificationTypeUpdate:
    r"""ClassificationTypeUpdate
    The classification type that Amazon Macie Classic applies to the associated S3 resources. At least one of the classification types (oneTime or continuous) must be specified. 
    """
    
    continuous: Optional[shared_s3continuousclassificationtype_enum.S3ContinuousClassificationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continuous') }})
    one_time: Optional[shared_s3onetimeclassificationtype_enum.S3OneTimeClassificationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneTime') }})
    
