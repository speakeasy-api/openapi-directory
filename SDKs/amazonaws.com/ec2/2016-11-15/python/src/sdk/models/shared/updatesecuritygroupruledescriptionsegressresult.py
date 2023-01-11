import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class UpdateSecurityGroupRuleDescriptionsEgressResult:
    return_: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
