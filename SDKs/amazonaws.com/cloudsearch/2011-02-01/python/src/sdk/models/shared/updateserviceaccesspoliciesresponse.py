import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import accesspoliciesstatus as shared_accesspoliciesstatus


@dataclasses.dataclass
class UpdateServiceAccessPoliciesResponse:
    r"""UpdateServiceAccessPoliciesResponse
    A response message that contains the status of updated access policies.
    """
    
    access_policies: shared_accesspoliciesstatus.AccessPoliciesStatus = dataclasses.field()
    
