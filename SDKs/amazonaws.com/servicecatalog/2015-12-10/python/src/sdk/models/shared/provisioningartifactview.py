import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import productviewsummary as shared_productviewsummary
from ..shared import provisioningartifact as shared_provisioningartifact


@dataclass_json
@dataclasses.dataclass
class ProvisioningArtifactView:
    r"""ProvisioningArtifactView
    An object that contains summary information about a product view and a provisioning artifact.
    """
    
    product_view_summary: Optional[shared_productviewsummary.ProductViewSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductViewSummary') }})
    provisioning_artifact: Optional[shared_provisioningartifact.ProvisioningArtifact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifact') }})
    
