import dataclasses
from ..shared import identitydkimattributes as shared_identitydkimattributes


@dataclasses.dataclass
class GetIdentityDkimAttributesResponse:
    r"""GetIdentityDkimAttributesResponse
    Represents the status of Amazon SES Easy DKIM signing for an identity. For domain identities, this response also contains the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES successfully verified that these tokens were published.
    """
    
    dkim_attributes: dict[str, shared_identitydkimattributes.IdentityDkimAttributes] = dataclasses.field()
    
