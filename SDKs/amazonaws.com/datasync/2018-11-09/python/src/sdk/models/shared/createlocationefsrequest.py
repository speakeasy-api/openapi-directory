import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ec2config as shared_ec2config
from ..shared import taglistentry as shared_taglistentry


@dataclass_json
@dataclasses.dataclass
class CreateLocationEfsRequest:
    r"""CreateLocationEfsRequest
    CreateLocationEfsRequest
    """
    
    ec2_config: shared_ec2config.Ec2Config = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ec2Config') }})
    efs_filesystem_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EfsFilesystemArn') }})
    subdirectory: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subdirectory') }})
    tags: Optional[list[shared_taglistentry.TagListEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
