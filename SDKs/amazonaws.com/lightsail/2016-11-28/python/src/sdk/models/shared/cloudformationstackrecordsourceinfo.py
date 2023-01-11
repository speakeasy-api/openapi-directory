import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudformationstackrecordsourcetype_enum as shared_cloudformationstackrecordsourcetype_enum


@dataclass_json
@dataclasses.dataclass
class CloudFormationStackRecordSourceInfo:
    r"""CloudFormationStackRecordSourceInfo
    Describes the source of a CloudFormation stack record (i.e., the export snapshot record).
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[shared_cloudformationstackrecordsourcetype_enum.CloudFormationStackRecordSourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    
