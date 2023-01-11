import dataclasses
from ..shared import identitynotificationattributes as shared_identitynotificationattributes


@dataclasses.dataclass
class GetIdentityNotificationAttributesResponse:
    r"""GetIdentityNotificationAttributesResponse
    Represents the notification attributes for a list of identities.
    """
    
    notification_attributes: dict[str, shared_identitynotificationattributes.IdentityNotificationAttributes] = dataclasses.field()
    
