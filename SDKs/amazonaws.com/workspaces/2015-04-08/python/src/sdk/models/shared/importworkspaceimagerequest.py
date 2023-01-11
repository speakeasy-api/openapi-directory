import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import application_enum as shared_application_enum
from ..shared import workspaceimageingestionprocess_enum as shared_workspaceimageingestionprocess_enum
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class ImportWorkspaceImageRequest:
    ec2_image_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ec2ImageId') }})
    image_description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageDescription') }})
    image_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageName') }})
    ingestion_process: shared_workspaceimageingestionprocess_enum.WorkspaceImageIngestionProcessEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IngestionProcess') }})
    applications: Optional[list[shared_application_enum.ApplicationEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Applications') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
