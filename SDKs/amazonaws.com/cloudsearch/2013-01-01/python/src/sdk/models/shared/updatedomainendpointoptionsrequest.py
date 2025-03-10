"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import domainendpointoptions as shared_domainendpointoptions


@dataclasses.dataclass
class UpdateDomainEndpointOptionsRequest:
    r"""Container for the parameters to the <code><a>UpdateDomainEndpointOptions</a></code> operation. Specifies the name of the domain you want to update and the domain endpoint options."""
    
    domain_endpoint_options: shared_domainendpointoptions.DomainEndpointOptions = dataclasses.field()  
    domain_name: str = dataclasses.field()  
    