import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import accesspoliciesstatus as shared_accesspoliciesstatus


@dataclasses.dataclass
class UpdateServiceAccessPoliciesResponse:
    r"""UpdateServiceAccessPoliciesResponse
    The result of an <code>UpdateServiceAccessPolicies</code> request. Contains the new access policies.
    """
    
    access_policies: shared_accesspoliciesstatus.AccessPoliciesStatus = dataclasses.field()
    
