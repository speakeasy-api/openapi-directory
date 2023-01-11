import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import comparisonoperator_enum as shared_comparisonoperator_enum
from ..shared import fieldtomatch as shared_fieldtomatch
from ..shared import texttransformation_enum as shared_texttransformation_enum


@dataclass_json
@dataclasses.dataclass
class SizeConstraint:
    r"""SizeConstraint
    <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html\">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html\">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies a constraint on the size of a part of the web request. AWS WAF uses the <code>Size</code>, <code>ComparisonOperator</code>, and <code>FieldToMatch</code> to build an expression in the form of \"<code>Size</code> <code>ComparisonOperator</code> size in bytes of <code>FieldToMatch</code>\". If that expression is true, the <code>SizeConstraint</code> is considered to match.</p>
    """
    
    comparison_operator: shared_comparisonoperator_enum.ComparisonOperatorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComparisonOperator') }})
    field_to_match: shared_fieldtomatch.FieldToMatch = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FieldToMatch') }})
    size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Size') }})
    text_transformation: shared_texttransformation_enum.TextTransformationEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextTransformation') }})
    
