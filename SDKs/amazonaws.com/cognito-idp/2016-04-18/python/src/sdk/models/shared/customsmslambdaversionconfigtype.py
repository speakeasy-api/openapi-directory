import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customsmssenderlambdaversiontype_enum as shared_customsmssenderlambdaversiontype_enum


@dataclass_json
@dataclasses.dataclass
class CustomSmsLambdaVersionConfigType:
    r"""CustomSmsLambdaVersionConfigType
    A custom SMS sender Lambda configuration type.
    """
    
    lambda_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaArn') }})
    lambda_version: shared_customsmssenderlambdaversiontype_enum.CustomSmsSenderLambdaVersionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaVersion') }})
    
