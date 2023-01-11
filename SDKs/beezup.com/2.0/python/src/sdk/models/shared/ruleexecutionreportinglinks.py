import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_getrulelink as shared_links_getrulelink


@dataclass_json
@dataclasses.dataclass
class RuleExecutionReportingLinks:
    r"""RuleExecutionReportingLinks
    Links to retrieve/action on this rule execution
    """
    
    rule: Optional[shared_links_getrulelink.LinksGetRuleLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule') }})
    
