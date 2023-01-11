import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_createrulelink as shared_links_createrulelink
from ..shared import links_getrulesexecutionslink as shared_links_getrulesexecutionslink
from ..shared import links_runruleslink as shared_links_runruleslink
from ..shared import links_getruleslink as shared_links_getruleslink


@dataclass_json
@dataclasses.dataclass
class RuleListLinks:
    r"""RuleListLinks
    Links to know if the user can create a rule or run all rules
    """
    
    create: shared_links_createrulelink.LinksCreateRuleLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('create') }})
    history: shared_links_getrulesexecutionslink.LinksGetRulesExecutionsLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('history') }})
    run: shared_links_runruleslink.LinksRunRulesLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('run') }})
    self: shared_links_getruleslink.LinksGetRulesLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
