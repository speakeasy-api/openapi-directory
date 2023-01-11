package openapisdk.models.shared;



/**
 * GetIdentityNotificationAttributesResponse
 * Represents the notification attributes for a list of identities.
**/
public class GetIdentityNotificationAttributesResponse {
    public java.util.Map<String, IdentityNotificationAttributes> notificationAttributes;
    public GetIdentityNotificationAttributesResponse withNotificationAttributes(java.util.Map<String, IdentityNotificationAttributes> notificationAttributes) {
        this.notificationAttributes = notificationAttributes;
        return this;
    }
}