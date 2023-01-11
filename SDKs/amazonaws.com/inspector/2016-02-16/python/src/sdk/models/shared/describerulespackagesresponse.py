import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import faileditemdetails as shared_faileditemdetails
from ..shared import rulespackage as shared_rulespackage


@dataclass_json
@dataclasses.dataclass
class DescribeRulesPackagesResponse:
    failed_items: dict[str, shared_faileditemdetails.FailedItemDetails] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedItems') }})
    rules_packages: list[shared_rulespackage.RulesPackage] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rulesPackages') }})
    
