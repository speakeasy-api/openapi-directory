import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_deleterulelink as shared_links_deleterulelink
from ..shared import links_disablerulelink as shared_links_disablerulelink
from ..shared import links_enablerulelink as shared_links_enablerulelink
from ..shared import links_movedownrulelink as shared_links_movedownrulelink
from ..shared import links_moveuprulelink as shared_links_moveuprulelink
from ..shared import links_getreportfilterlink as shared_links_getreportfilterlink
from ..shared import links_runrulelink as shared_links_runrulelink
from ..shared import links_getrulelink as shared_links_getrulelink
from ..shared import links_updaterulelink as shared_links_updaterulelink


@dataclass_json
@dataclasses.dataclass
class RuleLinks:
    r"""RuleLinks
    Links to retrieve/action on other entities
    """
    
    self: shared_links_getrulelink.LinksGetRuleLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    delete: Optional[shared_links_deleterulelink.LinksDeleteRuleLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    disable: Optional[shared_links_disablerulelink.LinksDisableRuleLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disable') }})
    enable: Optional[shared_links_enablerulelink.LinksEnableRuleLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    movedown: Optional[shared_links_movedownrulelink.LinksMoveDownRuleLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('movedown') }})
    moveup: Optional[shared_links_moveuprulelink.LinksMoveUpRuleLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moveup') }})
    report_filter: Optional[shared_links_getreportfilterlink.LinksGetReportFilterLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportFilter') }})
    run: Optional[shared_links_runrulelink.LinksRunRuleLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run') }})
    update: Optional[shared_links_updaterulelink.LinksUpdateRuleLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update') }})
    
