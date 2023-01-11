package openapisdk.models.shared;



public class IdentityNotificationAttributes {
    public String bounceTopic;
    public IdentityNotificationAttributes withBounceTopic(String bounceTopic) {
        this.bounceTopic = bounceTopic;
        return this;
    }
    public String complaintTopic;
    public IdentityNotificationAttributes withComplaintTopic(String complaintTopic) {
        this.complaintTopic = complaintTopic;
        return this;
    }
    public String deliveryTopic;
    public IdentityNotificationAttributes withDeliveryTopic(String deliveryTopic) {
        this.deliveryTopic = deliveryTopic;
        return this;
    }
    public Boolean forwardingEnabled;
    public IdentityNotificationAttributes withForwardingEnabled(Boolean forwardingEnabled) {
        this.forwardingEnabled = forwardingEnabled;
        return this;
    }
    public Boolean headersInBounceNotificationsEnabled;
    public IdentityNotificationAttributes withHeadersInBounceNotificationsEnabled(Boolean headersInBounceNotificationsEnabled) {
        this.headersInBounceNotificationsEnabled = headersInBounceNotificationsEnabled;
        return this;
    }
    public Boolean headersInComplaintNotificationsEnabled;
    public IdentityNotificationAttributes withHeadersInComplaintNotificationsEnabled(Boolean headersInComplaintNotificationsEnabled) {
        this.headersInComplaintNotificationsEnabled = headersInComplaintNotificationsEnabled;
        return this;
    }
    public Boolean headersInDeliveryNotificationsEnabled;
    public IdentityNotificationAttributes withHeadersInDeliveryNotificationsEnabled(Boolean headersInDeliveryNotificationsEnabled) {
        this.headersInDeliveryNotificationsEnabled = headersInDeliveryNotificationsEnabled;
        return this;
    }
}