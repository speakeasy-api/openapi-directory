import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import originrequestpolicy as shared_originrequestpolicy


@dataclasses.dataclass
class UpdateOriginRequestPolicyResult:
    origin_request_policy: Optional[shared_originrequestpolicy.OriginRequestPolicy] = dataclasses.field(default=None)
    
