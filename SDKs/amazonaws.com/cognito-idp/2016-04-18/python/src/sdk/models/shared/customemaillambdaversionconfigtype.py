import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customemailsenderlambdaversiontype_enum as shared_customemailsenderlambdaversiontype_enum


@dataclass_json
@dataclasses.dataclass
class CustomEmailLambdaVersionConfigType:
    r"""CustomEmailLambdaVersionConfigType
    A custom email sender Lambda configuration type.
    """
    
    lambda_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaArn') }})
    lambda_version: shared_customemailsenderlambdaversiontype_enum.CustomEmailSenderLambdaVersionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaVersion') }})
    
