import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptionconfiguration as shared_encryptionconfiguration
from ..shared import crossregioncopyretainrule as shared_crossregioncopyretainrule


@dataclass_json
@dataclasses.dataclass
class CrossRegionCopyAction:
    r"""CrossRegionCopyAction
    Specifies a rule for copying shared snapshots across Regions.
    """
    
    encryption_configuration: shared_encryptionconfiguration.EncryptionConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionConfiguration') }})
    target: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Target') }})
    retain_rule: Optional[shared_crossregioncopyretainrule.CrossRegionCopyRetainRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetainRule') }})
    
