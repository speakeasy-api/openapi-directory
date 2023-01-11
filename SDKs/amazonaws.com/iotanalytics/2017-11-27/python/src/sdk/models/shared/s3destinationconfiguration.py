import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import glueconfiguration as shared_glueconfiguration


@dataclass_json
@dataclasses.dataclass
class S3DestinationConfiguration:
    r"""S3DestinationConfiguration
    Configuration information for delivery of dataset contents to Amazon Simple Storage Service (Amazon S3).
    """
    
    bucket: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket') }})
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    glue_configuration: Optional[shared_glueconfiguration.GlueConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glueConfiguration') }})
    
