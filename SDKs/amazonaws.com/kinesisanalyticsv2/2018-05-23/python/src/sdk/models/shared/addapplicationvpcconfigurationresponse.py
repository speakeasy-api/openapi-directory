import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import vpcconfigurationdescription as shared_vpcconfigurationdescription


@dataclass_json
@dataclasses.dataclass
class AddApplicationVpcConfigurationResponse:
    application_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationARN') }})
    application_version_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationVersionId') }})
    vpc_configuration_description: Optional[shared_vpcconfigurationdescription.VpcConfigurationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfigurationDescription') }})
    
