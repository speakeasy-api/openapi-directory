import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import changeaction_enum as shared_changeaction_enum
from ..shared import activatedrule as shared_activatedrule


@dataclass_json
@dataclasses.dataclass
class RuleGroupUpdate:
    r"""RuleGroupUpdate
    <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html\">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html\">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies an <code>ActivatedRule</code> and indicates whether you want to add it to a <code>RuleGroup</code> or delete it from a <code>RuleGroup</code>.</p>
    """
    
    action: shared_changeaction_enum.ChangeActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    activated_rule: shared_activatedrule.ActivatedRule = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActivatedRule') }})
    
