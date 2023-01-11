import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provisioningartifactview as shared_provisioningartifactview


@dataclass_json
@dataclasses.dataclass
class ListProvisioningArtifactsForServiceActionOutput:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    provisioning_artifact_views: Optional[list[shared_provisioningartifactview.ProvisioningArtifactView]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactViews') }})
    
