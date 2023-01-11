import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import budgetdetail as shared_budgetdetail
from ..shared import productviewdetail as shared_productviewdetail
from ..shared import provisioningartifactsummary as shared_provisioningartifactsummary
from ..shared import tagoptiondetail as shared_tagoptiondetail
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class DescribeProductAsAdminOutput:
    budgets: Optional[list[shared_budgetdetail.BudgetDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Budgets') }})
    product_view_detail: Optional[shared_productviewdetail.ProductViewDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductViewDetail') }})
    provisioning_artifact_summaries: Optional[list[shared_provisioningartifactsummary.ProvisioningArtifactSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactSummaries') }})
    tag_options: Optional[list[shared_tagoptiondetail.TagOptionDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagOptions') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
