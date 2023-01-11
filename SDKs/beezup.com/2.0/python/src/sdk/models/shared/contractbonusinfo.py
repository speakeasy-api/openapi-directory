import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bonusinfo as shared_bonusinfo


@dataclass_json
@dataclasses.dataclass
class ContractBonusInfo:
    r"""ContractBonusInfo
    Describe the bonus information related to your current contract.
    """
    
    bonuses: list[shared_bonusinfo.BonusInfo] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bonuses') }})
    
