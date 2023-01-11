import dataclasses
from ..shared import identitymailfromdomainattributes as shared_identitymailfromdomainattributes


@dataclasses.dataclass
class GetIdentityMailFromDomainAttributesResponse:
    r"""GetIdentityMailFromDomainAttributesResponse
    Represents the custom MAIL FROM attributes for a list of identities.
    """
    
    mail_from_domain_attributes: dict[str, shared_identitymailfromdomainattributes.IdentityMailFromDomainAttributes] = dataclasses.field()
    
