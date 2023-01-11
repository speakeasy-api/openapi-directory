import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import changeaction_enum as shared_changeaction_enum
from ..shared import xssmatchtuple as shared_xssmatchtuple


@dataclass_json
@dataclasses.dataclass
class XSSMatchSetUpdate:
    r"""XSSMatchSetUpdate
    <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html\">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html\">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want to inspect for cross-site scripting attacks and indicates whether you want to add the specification to an <a>XssMatchSet</a> or delete it from an <code>XssMatchSet</code>.</p>
    """
    
    action: shared_changeaction_enum.ChangeActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    xss_match_tuple: shared_xssmatchtuple.XSSMatchTuple = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('XssMatchTuple') }})
    
