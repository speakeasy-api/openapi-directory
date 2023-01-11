import dataclasses
from typing import Optional
from enum import Enum
from ..shared import position as shared_position
from ..shared import policysourcetype_enum as shared_policysourcetype_enum


@dataclasses.dataclass
class Statement:
    r"""Statement
    <p>Contains a reference to a <code>Statement</code> element in a policy document that determines the result of the simulation.</p> <p>This data type is used by the <code>MatchedStatements</code> member of the <code> <a>EvaluationResult</a> </code> type.</p>
    """
    
    end_position: Optional[shared_position.Position] = dataclasses.field(default=None)
    source_policy_id: Optional[str] = dataclasses.field(default=None)
    source_policy_type: Optional[shared_policysourcetype_enum.PolicySourceTypeEnum] = dataclasses.field(default=None)
    start_position: Optional[shared_position.Position] = dataclasses.field(default=None)
    
