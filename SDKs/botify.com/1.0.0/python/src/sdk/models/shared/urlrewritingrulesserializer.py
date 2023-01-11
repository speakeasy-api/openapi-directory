import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rewritingruleserializer as shared_rewritingruleserializer


@dataclass_json
@dataclasses.dataclass
class URLRewritingRulesSerializer:
    rules: list[shared_rewritingruleserializer.RewritingRuleSerializer] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    urls: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    
