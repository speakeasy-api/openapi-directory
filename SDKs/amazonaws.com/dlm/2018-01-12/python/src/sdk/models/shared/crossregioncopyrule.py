import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import crossregioncopydeprecaterule as shared_crossregioncopydeprecaterule
from ..shared import crossregioncopyretainrule as shared_crossregioncopyretainrule


@dataclass_json
@dataclasses.dataclass
class CrossRegionCopyRule:
    r"""CrossRegionCopyRule
    Specifies a rule for cross-Region snapshot copies.
    """
    
    encrypted: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encrypted') }})
    cmk_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CmkArn') }})
    copy_tags: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CopyTags') }})
    deprecate_rule: Optional[shared_crossregioncopydeprecaterule.CrossRegionCopyDeprecateRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeprecateRule') }})
    retain_rule: Optional[shared_crossregioncopyretainrule.CrossRegionCopyRetainRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetainRule') }})
    target: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Target') }})
    target_region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetRegion') }})
    
