"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import changeaction_enum as shared_changeaction_enum
from ..shared import predicate as shared_predicate
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class RuleUpdate:
    r"""<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href=\\"https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html\\">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href=\\"https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html\\">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies a <code>Predicate</code> (such as an <code>IPSet</code>) and indicates whether you want to add it to a <code>Rule</code> or delete it from a <code>Rule</code>.</p>"""
    
    action: shared_changeaction_enum.ChangeActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Action') }})  
    predicate: shared_predicate.Predicate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Predicate') }})  
    