import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sqlinjectionmatchtuple as shared_sqlinjectionmatchtuple


@dataclass_json
@dataclasses.dataclass
class SQLInjectionMatchSet:
    r"""SQLInjectionMatchSet
    <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html\">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html\">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>SqlInjectionMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header. If a <code>SqlInjectionMatchSet</code> contains more than one <code>SqlInjectionMatchTuple</code> object, a request needs to include snippets of SQL code in only one of the specified parts of the request to be considered a match.</p>
    """
    
    sql_injection_match_set_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SqlInjectionMatchSetId') }})
    sql_injection_match_tuples: list[shared_sqlinjectionmatchtuple.SQLInjectionMatchTuple] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SqlInjectionMatchTuples') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
