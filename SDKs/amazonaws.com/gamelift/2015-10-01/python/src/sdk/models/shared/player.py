import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributevalue as shared_attributevalue


@dataclass_json
@dataclasses.dataclass
class Player:
    r"""Player
    Represents a player in matchmaking. When starting a matchmaking request, a player has a player ID, attributes, and may have latency data. Team information is added after a match has been successfully completed.
    """
    
    latency_in_ms: Optional[dict[str, int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatencyInMs') }})
    player_attributes: Optional[dict[str, shared_attributevalue.AttributeValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerAttributes') }})
    player_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerId') }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Team') }})
    
