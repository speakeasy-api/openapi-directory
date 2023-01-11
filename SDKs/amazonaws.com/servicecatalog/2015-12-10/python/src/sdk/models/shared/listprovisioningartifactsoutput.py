import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provisioningartifactdetail as shared_provisioningartifactdetail


@dataclass_json
@dataclasses.dataclass
class ListProvisioningArtifactsOutput:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    provisioning_artifact_details: Optional[list[shared_provisioningartifactdetail.ProvisioningArtifactDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactDetails') }})
    
