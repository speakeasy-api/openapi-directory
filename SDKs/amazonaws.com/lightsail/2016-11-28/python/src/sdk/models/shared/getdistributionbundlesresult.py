import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import distributionbundle as shared_distributionbundle


@dataclass_json
@dataclasses.dataclass
class GetDistributionBundlesResult:
    bundles: Optional[list[shared_distributionbundle.DistributionBundle]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundles') }})
    
