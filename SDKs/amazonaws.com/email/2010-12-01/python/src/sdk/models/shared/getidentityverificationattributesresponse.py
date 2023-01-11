import dataclasses
from ..shared import identityverificationattributes as shared_identityverificationattributes


@dataclasses.dataclass
class GetIdentityVerificationAttributesResponse:
    r"""GetIdentityVerificationAttributesResponse
    The Amazon SES verification status of a list of identities. For domain identities, this response also contains the verification token.
    """
    
    verification_attributes: dict[str, shared_identityverificationattributes.IdentityVerificationAttributes] = dataclasses.field()
    
