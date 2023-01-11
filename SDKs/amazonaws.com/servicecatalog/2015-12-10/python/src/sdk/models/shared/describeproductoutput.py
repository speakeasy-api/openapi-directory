import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import budgetdetail as shared_budgetdetail
from ..shared import launchpath as shared_launchpath
from ..shared import productviewsummary as shared_productviewsummary
from ..shared import provisioningartifact as shared_provisioningartifact


@dataclass_json
@dataclasses.dataclass
class DescribeProductOutput:
    budgets: Optional[list[shared_budgetdetail.BudgetDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Budgets') }})
    launch_paths: Optional[list[shared_launchpath.LaunchPath]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LaunchPaths') }})
    product_view_summary: Optional[shared_productviewsummary.ProductViewSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductViewSummary') }})
    provisioning_artifacts: Optional[list[shared_provisioningartifact.ProvisioningArtifact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifacts') }})
    
