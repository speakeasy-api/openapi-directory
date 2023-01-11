import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directoryvpcsettings as shared_directoryvpcsettings


@dataclass_json
@dataclasses.dataclass
class AddRegionRequest:
    directory_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    region_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegionName') }})
    vpc_settings: shared_directoryvpcsettings.DirectoryVpcSettings = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VPCSettings') }})
    
