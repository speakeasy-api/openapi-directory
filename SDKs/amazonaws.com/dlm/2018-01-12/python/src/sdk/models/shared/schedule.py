import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createrule as shared_createrule
from ..shared import crossregioncopyrule as shared_crossregioncopyrule
from ..shared import deprecaterule as shared_deprecaterule
from ..shared import fastrestorerule as shared_fastrestorerule
from ..shared import retainrule as shared_retainrule
from ..shared import sharerule as shared_sharerule
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class Schedule:
    r"""Schedule
    Specifies a backup schedule for a snapshot or AMI lifecycle policy.
    """
    
    copy_tags: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CopyTags') }})
    create_rule: Optional[shared_createrule.CreateRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateRule') }})
    cross_region_copy_rules: Optional[list[shared_crossregioncopyrule.CrossRegionCopyRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrossRegionCopyRules') }})
    deprecate_rule: Optional[shared_deprecaterule.DeprecateRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeprecateRule') }})
    fast_restore_rule: Optional[shared_fastrestorerule.FastRestoreRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FastRestoreRule') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    retain_rule: Optional[shared_retainrule.RetainRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetainRule') }})
    share_rules: Optional[list[shared_sharerule.ShareRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareRules') }})
    tags_to_add: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagsToAdd') }})
    variable_tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VariableTags') }})
    
