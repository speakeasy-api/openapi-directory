import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import domainendpointoptionsstatus as shared_domainendpointoptionsstatus


@dataclasses.dataclass
class UpdateDomainEndpointOptionsResponse:
    r"""UpdateDomainEndpointOptionsResponse
    The result of a <code>UpdateDomainEndpointOptions</code> request. Contains the configuration and status of the domain's endpoint options. 
    """
    
    domain_endpoint_options: Optional[shared_domainendpointoptionsstatus.DomainEndpointOptionsStatus] = dataclasses.field(default=None)
    
