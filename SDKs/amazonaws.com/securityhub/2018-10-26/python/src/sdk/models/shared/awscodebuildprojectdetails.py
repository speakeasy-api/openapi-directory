import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awscodebuildprojectenvironment as shared_awscodebuildprojectenvironment
from ..shared import awscodebuildprojectsource as shared_awscodebuildprojectsource
from ..shared import awscodebuildprojectvpcconfig as shared_awscodebuildprojectvpcconfig


@dataclass_json
@dataclasses.dataclass
class AwsCodeBuildProjectDetails:
    r"""AwsCodeBuildProjectDetails
    Information about an CodeBuild project.
    """
    
    encryption_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionKey') }})
    environment: Optional[shared_awscodebuildprojectenvironment.AwsCodeBuildProjectEnvironment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    service_role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceRole') }})
    source: Optional[shared_awscodebuildprojectsource.AwsCodeBuildProjectSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    vpc_config: Optional[shared_awscodebuildprojectvpcconfig.AwsCodeBuildProjectVpcConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    
